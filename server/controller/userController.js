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
        console.log('===USER LOG IN===');
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const msg = errors.array().map((item) => {
                return item.msg;
            });
            return res.json({ ok: false, msg });
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
            const msg = errors.array().map((item) => {
                return item.msg;
            });
            return res.status(400).json({ ok: false, msg });
        }

        const { firstName, lastName, userName, pwd, isAdmin } = matchedData(req);

        const checkUserInDb = await db.getUserByUserName(userName);
        // console.log({ checkUserInDb });

        if (checkUserInDb) {
            return res
                .status(400)
                .json({ ok: false, msg: `User name "${userName}" was taken, please choose a different one` });
        }

        const hashedPwd = await bcrypt.hash(pwd, 16);
        const isAdminDb = !!isAdmin;

        try {
            // console.log({ firstName, lastName, userName, hashedPwd, isAdminDb });

            await db.insertNewUser(firstName, lastName, userName, hashedPwd, isAdminDb);
            return res.status(201).json({ ok: true, msg: 'Account created successfully' });
        } catch (err) {
            res.status(501).json({ ok: false, msg: 'Failed to create account. Please try again later' });
            console.log({ err });

            return next(err);
        }
    },
];

const updateProfilePost = [
    validatorSchema.firstNameValidatorSchema,
    validatorSchema.lastNameValidatorSchema,
    validatorSchema.avatarURLValidatorSchema,
    validatorSchema.bioValidatorSchema,
    validatorSchema.locationValidatorSchema,
    validatorSchema.birthdayDateValidatorSchema,
    async (req, res, next) => {
        console.log('===UPDATE PROFILE===');
        const userId = req.params.userId;
        // console.log({ userId });

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            const msg = errors.array().map((item) => {
                return item.msg;
            });
            return res.status(400).json({ ok: false, msg });
        }

        const checkUserExistence = await db.getUserById(userId);
        if (!checkUserExistence) {
            return res.json({ ok: false, msg: 'User not found' });
        }

        const { firstName, lastName, avatarUrl, bio, location, birthdayDate } = matchedData(req);
        const avatarUrlToDb = avatarUrl ? avatarUrl : null;
        const bioToDb = bio ? bio : null;
        const locationToDb = location ? location : null;
        const birthdayDateToDb = birthdayDate ? birthdayDate : null;

        // return res.json({ ok: true });

        try {
            // console.log({ firstName, lastName, avatarUrl, bio, location, birthdayDate });
            // console.log({ firstName, lastName, avatarUrlToDb, bioToDb, locationToDb, birthdayDateToDb });

            await db.updateUserInfo(
                userId,
                firstName,
                lastName,
                avatarUrlToDb,
                bioToDb,
                locationToDb,
                birthdayDateToDb,
            );

            return res.json({ ok: true, msg: 'Profile updated successfully' });
        } catch (err) {
            console.log({ err });
            res.status(500).json({ ok: false, msg: 'Failed to update profile' });
            return next(err);
        }
    },
];

// const userInfoByUserId = async (req, res, next) => {
//     const userId = req.params.userId;

//     try {
//         const userFromDb = await db.getUserById(userId);
//         const { password, ...rest } = userFromDb;
//         return res.json({ ok: true, user: rest });
//     } catch (err) {
//         console.log({ err });
//         res.status(500).json({ ok: false, msg: 'Failed to retrieve user info', errors: err });
//         return next(err);
//     }
// };

const userInfoByUserName = async (req, res, next) => {
    console.log('===GET USER BY USER NAME===');
    const userName = req.params.userName;

    try {
        const userFromDb = await db.getUserByUserName(userName);
        const { password, ...rest } = userFromDb;
        // console.log('user: ', rest);

        return res.json({ ok: true, user: rest });
    } catch (err) {
        console.log({ err });
        res.status(500).json({ ok: false, msg: 'Failed to retrieve user info', errors: err });
        return next(err);
    }
};

module.exports = {
    userAuthenticateActiveSession,
    logInPost,
    logOutPost,
    userRegisterPost,
    updateProfilePost,
    // userInfoByUserId,
    userInfoByUserName,
};
