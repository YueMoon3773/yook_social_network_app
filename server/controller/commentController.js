const { validationResult, matchedData } = require('express-validator');
const db = require('../db/queries');
const validatorSchema = require('../utils/validatorSchema');

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
        res.status(500).json({ ok: false, msg: 'Failed to retrieve comments from user', errors: err });
        return next(err);
    }
};

const getCommentsOfSpecificPost = async (req, res, next) => {
    console.log('===GET COMMENTS OF SPECIFIC POST BY POST ID===');
    const postId = req.params.postId;

    try {
        const comments = await db.getCommentsAndItsInfoFromSpecificPostByPostId(postId);
        return res.json({ ok: true, comments });
    } catch (err) {
        console.log({ err });
        res.status(500).json({ ok: false, msg: 'Failed to retrieve post details', errors: err });
        return next(err);
    }
};

const postCommentsToSpecificPost = [
    validatorSchema.commentContentValidatorSchema,
    validatorSchema.userIdValidatorSchema,
    async (req, res, next) => {
        const postId = Number(req.params.postId);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const msg = errors.array().map((item) => {
                return item.msg;
            });
            return res.json({ ok: false, msg });
        }

        const { userId, comment } = matchedData(req);
        // console.log({ postId, userId, comment });

        try {
            await db.insertNewCommentAndItsRelations(postId, userId, comment);
            return res.json({ ok: true, msg: 'Your comment has been added' });
        } catch (err) {
            console.log({ err });
            res.status(500).json({ ok: false, msg: 'Failed to add comment', errors: err });
            return next(err);
        }
    },
];

module.exports = {
    getCommentsBySpecificUser,
    getCommentsOfSpecificPost,
    postCommentsToSpecificPost,
};
