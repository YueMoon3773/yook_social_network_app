const db = require('../db/queries');

const userAuthenticateActiveSession = (req, res) => {
    // console.log(req.user);

    if (req.user) {
        const { password, ...rest } = req.user;
        return res.json({ user: rest });
    } else {
        return res.json({
            user: { id: 1, first_name: 'River', last_name: 'Powlowski', user_name: 'kafolan_ruy' },
        });
        // return res.status(401).json({ user: null });
    }
};

module.exports = { userAuthenticateActiveSession };
