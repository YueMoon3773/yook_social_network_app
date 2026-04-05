const db = require('../db/queries');

const getCommentsBySpecificUser = async (req, res, next) => {
    console.log('===GET COMMENTS BY ONE USER===');
    const userName = req.params.userName;

    try {
        const user = await db.getUserByUserName(userName);
        const comments = await db.getAllCommentsFromSpecificUserByUserId(user.id);
        // console.log({ comments });

        return res.json({ ok: true, comments });
    } catch (err) {
        console.log({ err });
        res.status(500).json({ ok: false, msg: 'failed to retrieve comments from user', errors: err });
        return next(err);
    }
};

module.exports = {
    getCommentsBySpecificUser,
};
