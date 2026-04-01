const { validationResult, matchedData, body } = require('express-validator');
const passport = require('passport');
const bcrypt = require('bcryptjs');

const db = require('../db/queries');

const validatorSchema = require('../utils/validatorSchema.js');

const userAuthenticateActiveSession = async (req, res) => {
    // console.log(req.user);

    if (req.user) {
        const { password, ...rest } = req.user;
        return res.json({ user: rest });
    } else {
        // return res.json({
        //     user: { id: 1, first_name: 'River', last_name: 'Powlowski', user_name: 'kafolan_ruy' },
        // });

        return res.status(401).json({ user: null });
    }
};

const logInPost = [
    body('userName').notEmpty().withMessage('Username is required'),
    body('pwd').notEmpty().withMessage('Password is required'),
    async (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ ok: false, msg: errors.array() });
        }

        passport.authenticate('local', (err, user, info) => {
            if (err) return next(err);

            if (!user) {
                console.log({ info });
                return res.json({ ok: false, err: [{ msg: info.message }] });
            }

            req.login(user, (err) => {
                if (err) return next(err);

                return res.json({ ok: true, user });
            });
        })(req, res, next);
    },
];

const logOutPost = async (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ ok: false, msg: 'Log out failed!' });
        }
        return res.json({ ok: true, msg: 'Logged out' });
    });
};

const userRegisterPost = [
    validatorSchema.firstNameValidatorSchema,
    validatorSchema.lastNameValidatorSchema,
    validatorSchema.userNameValidatorSchema,
    validatorSchema.passwordValidatorSchema,
    validatorSchema.isAdminValidatorSchema,
    async (req, res, next) => {
        console.log('===USER REGISTER===');
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json({ ok: false, msg: errors.array() });
        }

        const { firstName, lastName, userName, pwd, isAdmin } = matchedData(req);

        const checkUserInDb = db.getUserByUserName(userName);
        if (checkUserInDb) {
            return res
                .status(400)
                .json({ ok: false, msg: `User name ${userName} is taken, please choose a different one` });
        }

        const hashedPwd = await bcrypt.hash(pwd, 16);
        const isAdminDb = !!isAdmin;

        try {
            console.log({ firstName, lastName, userName, hashedPwd, isAdminDb });

            await db.insertNewUser(firstName, lastName, userName, hashedPwd, isAdminDb);
            return res.status(201).json({ ok: false, msg: 'Account created successfully' });
        } catch (err) {
            res.status(501).json({ ok: false, msg: 'Failed to create account. Please try again later' });
            console.log({ err });

            return next(err);
        }
    },
];

module.exports = { userAuthenticateActiveSession, logInPost, logOutPost };
