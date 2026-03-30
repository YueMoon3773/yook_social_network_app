const { validationResult, matchedData } = require('express-validator');
const passport = require('passport');
const bcrypt = require('bcryptjs');

const db = require('../db/queries');

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

const logInPost = async (req, res, next) => {
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
};

const logOutPost = async (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ ok: false, smsg: 'Log out failed!' });
        }
        return res.json({ ok: true, msg: 'Logged out' });
    });
};

module.exports = { userAuthenticateActiveSession, logInPost, logOutPost };
