const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const db = require('../db/queries');

passport.use(
    new LocalStrategy({ usernameField: 'userName', passwordField: 'pwd' }, async (userName, pwd, done) => {
        try {
            // console.log({ userName, pwd });

            const user = await db.getUserByUserName(userName);
            if (!user) return done(null, false, { message: `User "${userName}" does not exist.` });

            const matchedPwd = await bcrypt.compare(pwd, user.password);
            if (!matchedPwd) return done(null, false, { message: `Incorrect password for user "${userName}".` });
            // console.log({ user });

            const { password, ...responseUser } = user;
            // return done(null, user);
            return done(null, responseUser);
        } catch (err) {
            return done(err);
        }
    }),
);

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await db.getUserById(id);
        return done(null, user);
    } catch (err) {
        return done(err);
    }
});
