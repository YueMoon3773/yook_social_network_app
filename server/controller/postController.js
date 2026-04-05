const db = require('../db/queries');

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
        res.status(500).json({ ok: false, msg: 'failed to retrieve posts from user', errors: err });
        return next(err);
    }
};

module.exports = {
    getPosts,
    getPostQuantity,
    getPostsBySpecificUser,
};
