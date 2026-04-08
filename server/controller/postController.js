const { validationResult, matchedData } = require('express-validator');
const db = require('../db/queries');
const validatorSchema = require('../utils/validatorSchema');

const getPosts = async (req, res, next) => {
    console.log('===GET POSTS===');
    try {
        const sortBy = req.query.sortBy;
        const postPerPage = Number(req.query.postPerPage);
        const cursorLastId = Number(req.query.cursorLastId);
        const cursorLastCmtNumber = Number(req.query.cursorLastCmtNumber);
        console.log({ sortBy, postPerPage, cursorLastId, cursorLastCmtNumber });

        let posts;

        if (sortBy === undefined && postPerPage === undefined) {
            console.log('Unauthorized user => retrieve 10 posts only');

            posts = await db.getInitialNumberOfPostsAndTheirInfoForBaseRender(10);
        } else if (sortBy === undefined && postPerPage !== undefined) {
            console.log('Authorized usr');
            console.log('Login 1st time => retrieve 1st 25 posts');

            posts = await db.getInitialNumberOfPostsAndTheirInfoForBaseRender(postPerPage);
        } else {
            console.log('here1');

            let orderDirection;
            if (sortBy === 'newToOld' || sortBy === 'mostCmt') {
                orderDirection = 'DESC';
            } else if (sortBy === 'oldToNew' || sortBy === 'leastCmt') {
                orderDirection = 'ASC';
            }

            if (sortBy === 'newToOld' || sortBy === 'oldToNew') {
                if (Number.isNaN(cursorLastId) || Number.isNaN(cursorLastCmtNumber)) {
                    console.log('here2');
                    posts = await db.getSpecificNumberOfPostsAndTheirInfoFromTheBeginningOrderById(
                        orderDirection,
                        postPerPage,
                    );
                }
            } else if (sortBy === 'mostCmt' || sortBy === 'leastCmt') {
                if (Number.isNaN(cursorLastId) || Number.isNaN(cursorLastCmtNumber)) {
                    console.log('here3');
                    posts = await db.getSpecificNumberOfPostsAndTheirInfoFromTheBeginningOrderByCommentNumber(
                        orderDirection,
                        postPerPage,
                    );
                }
            }
            // posts = await db.getSpecificNumberOfPostsAndTheirInfo(postPerPage);
        }

        // let posts = await db.getInitialNumberOfPostsAndTheirInfoForBaseRender(10);
        // console.log({ posts });

        return res.json({ posts });
    } catch (err) {
        res.status(500).json({ ok: false, err });
        return next(err);
    }
};

const getPostQuantity = async (req, res, next) => {
    console.log('===GET POST QUANTITY===');
    try {
        const postQuantity = await db.getPostQuantity();
        console.log({ postQuantity });

        return res.json({ postQuantity });
    } catch (err) {
        res.status(500).json({ ok: false, err });
        return next(err);
    }
};

const getPostsBySpecificUser = async (req, res, next) => {
    console.log('===GET POSTS BY ONE USER===');
    const userName = req.params.userName;

    try {
        const user = await db.getUserByUserName(userName);
        const posts = await db.getAllPostsFromSpecificUserByUserId(user.id);
        return res.json({ ok: true, posts });
    } catch (err) {
        console.log({ err });
        res.status(500).json({ ok: false, msg: 'Failed to retrieve posts from user', errors: err });
        return next(err);
    }
};

const getPost = async (req, res, next) => {
    console.log('===GET SPECIFIC POST BY POST ID===');
    const postId = req.params.postId;

    try {
        const post = await db.getSpecificPostAndItsInfoByPostId(postId);
        return res.json({ ok: true, post });
    } catch (err) {
        console.log({ err });
        res.status(500).json({ ok: false, msg: 'Failed to retrieve post details', errors: err });
        return next(err);
    }
};

const postNewPost = [
    validatorSchema.postTitleValidatorSchema,
    validatorSchema.postContentValidatorSchema,
    async (req, res, next) => {
        console.log('===POST NEW POST===');
        const errors = validationResult(req);
        const userId = Number(req.params.userId);
        console.log({ userId });

        if (!errors.isEmpty()) {
            const msg = errors.array().map((item) => {
                return item.msg;
            });
            return res.json({ ok: false, msg });
        }

        const { postTitle, postContent } = matchedData(req);
        // console.log({ postTitle, postContent, userId });

        try {
            await db.insertNewPostAndItsRelation(postTitle, postContent, userId);
            return res.json({ ok: true, msg: 'Your post has been added' });
        } catch (err) {
            console.log({ err });
            res.status(500).json({ ok: false, msg: 'Failed to add post', errors: err });
            return next(err);
        }
    },
];

module.exports = {
    getPosts,
    getPostQuantity,
    getPostsBySpecificUser,
    getPost,
    postNewPost,
};
