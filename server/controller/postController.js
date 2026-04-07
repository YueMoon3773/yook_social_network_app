const { validationResult, matchedData } = require('express-validator');
const db = require('../db/queries');
const validatorSchema = require('../utils/validatorSchema');

const getPosts = async (req, res, next) => {
    try {
        const sortBy = req.query.sortBy;
        const postQuantity = Number(req.query.postQuantity);
        console.log('===GET POSTS===');

        console.log({ sortBy, postQuantity });

        let posts;
        if (sortBy === undefined && postQuantity === undefined) {
            console.log('here 1');

            posts = await db.getSpecificNumberOfPostsAndTheirInfoFromBeginning(10);
        } else if (sortBy === undefined && postQuantity !== undefined) {
            console.log('here 2');

            posts = await db.getSpecificNumberOfPostsAndTheirInfoFromBeginning(postQuantity);
        } else {
            // posts = await db.getSpecificNumberOfPostsAndTheirInfo(postQuantity);
        }

        // let posts = await db.getSpecificNumberOfPostsAndTheirInfoFromBeginning(10);
        // console.log({ posts });

        return res.json({ posts });
    } catch (err) {
        res.status(500).json({ ok: false, err });
        return next(err);
    }
};

const getPostQuantity = async (req, res, next) => {
    try {
        const postQuantity = await db.getPostQuantity();
        console.log('===GET POST QUANTITY===');
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
