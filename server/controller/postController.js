const db = require('../db/queries');

const getPosts = async (req, res, next) => {
    try {
        const sortBy = req.query.sortBy;
        const postQuantity = Number(req.query.postQuantity);
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
        return next();
    }
};

module.exports = {
    getPosts,
};
