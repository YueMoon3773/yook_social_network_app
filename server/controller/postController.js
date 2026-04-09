const { validationResult, matchedData } = require('express-validator');
const db = require('../db/queries');
const validatorSchema = require('../utils/validatorSchema');

const getPosts = async (req, res, next) => {
    console.log('===GET POSTS===');
    try {
        const sortBy = req.query.sortBy;
        const postPerPage = Number(req.query.postPerPage);
        const cursorFirstId = Number(req.query.cursorFirstId);
        const cursorLastId = Number(req.query.cursorLastId);
        const cursorFirstCmtNumber = Number(req.query.cursorFirstCmtNumber);
        const cursorLastCmtNumber = Number(req.query.cursorLastCmtNumber);
        const paginationDirection = req.query.paginationDirection;

        // console.log({ sortBy, postPerPage });
        // console.log({ cursorFirstId, cursorLastId });
        // console.log({ cursorFirstCmtNumber, cursorLastCmtNumber });
        // console.log({ paginationDirection });

        let posts;

        // if (sortBy === undefined && postPerPage === undefined) {
        //     console.log('Unauthorized user => retrieve 10 posts only');

        //     posts = await db.getInitialNumberOfPostsAndTheirInfoForBaseRender(10);
        // } else
        if (sortBy === undefined && postPerPage !== undefined) {
            // console.log('Authorized user');
            // console.log('Login 1st time => retrieve 1st 25 posts');

            posts = await db.getInitialNumberOfPostsAndTheirInfoForBaseRender(postPerPage);
        } else if (sortBy !== undefined && postPerPage !== undefined) {
            let orderDirection;
            let orderDisplay;
            let paginationDirectionToDb;

            if (sortBy === 'oldToNew' || sortBy === 'leastCmt') {
                if (paginationDirection === 'next') {
                    orderDirection = 'ASC';
                    paginationDirectionToDb = '>';
                } else if (paginationDirection === 'prev') {
                    orderDirection = 'DESC';
                    paginationDirectionToDb = '<';
                } else orderDirection = 'ASC';
                orderDisplay = 'ASC';
            } else if (sortBy === 'newToOld' || sortBy === 'mostCmt') {
                if (paginationDirection === 'next') {
                    orderDirection = 'DESC';
                    paginationDirectionToDb = '<';
                } else if (paginationDirection === 'prev') {
                    orderDirection = 'ASC';
                    paginationDirectionToDb = '>';
                } else orderDirection = 'DESC';
                orderDisplay = 'DESC';
            }


            // console.log({ orderDirection, orderDisplay });
            // console.log({ paginationDirectionToDb });

            /* Sorting by date (post id) */
            if (sortBy === 'newToOld' || sortBy === 'oldToNew') {
                if (paginationDirection === undefined && (Number.isNaN(cursorLastId) || Number.isNaN(cursorFirstId))) {
                    // console.log('Change posts per page by ID from 1st post');
                    posts = await db.getSpecificNumberOfPostsAndTheirInfoFromTheBeginningOrderById(
                        orderDirection,
                        postPerPage,
                    );
                } else if (paginationDirection === 'next' && !Number.isNaN(cursorLastId)) {
                    // console.log('order by post id, next btn');
                    posts = await db.getSpecificNumberOfPostsAndTheirInfoFromSpecificKeyPaginationOrderById(
                        orderDirection,
                        orderDisplay,
                        paginationDirectionToDb,
                        cursorLastId,
                        postPerPage,
                    );
                } else if (paginationDirection === 'prev' && !Number.isNaN(cursorFirstId)) {
                    // console.log('order by post id, prev btn');
                    posts = await db.getSpecificNumberOfPostsAndTheirInfoFromSpecificKeyPaginationOrderById(
                        orderDirection,
                        orderDisplay,
                        paginationDirectionToDb,
                        cursorFirstId,
                        postPerPage,
                    );
                }
            } else if (sortBy === 'mostCmt' || sortBy === 'leastCmt') {
                if (
                    paginationDirection === undefined &&
                    (Number.isNaN(cursorFirstId) ||
                        Number.isNaN(cursorLastId) ||
                        Number.isNaN(cursorFirstCmtNumber) ||
                        Number.isNaN(cursorLastCmtNumber))
                ) {
                    // console.log('Change posts per page by COMMENT NUMBER from 1st post');
                    posts = await db.getSpecificNumberOfPostsAndTheirInfoFromTheBeginningOrderByCommentNumber(
                        orderDirection,
                        postPerPage,
                    );
                } else if (
                    paginationDirection === 'next' &&
                    !Number.isNaN(cursorLastId) &&
                    !Number.isNaN(cursorLastCmtNumber)
                ) {
                    // console.log('order by cmt number, next btn');
                    posts = await db.getSpecificNumberOfPostsAndTheirInfoFromSpecificKeyPaginationOrderByCommentNumber(
                        orderDirection,
                        orderDisplay,
                        paginationDirectionToDb,
                        cursorLastId,
                        cursorLastCmtNumber,
                        postPerPage,
                    );
                } else if (
                    paginationDirection === 'prev' &&
                    !Number.isNaN(cursorFirstId) &&
                    !Number.isNaN(cursorFirstCmtNumber)
                ) {
                    // console.log('order by cmt number, prev btn');
                    posts = await db.getSpecificNumberOfPostsAndTheirInfoFromSpecificKeyPaginationOrderByCommentNumber(
                        orderDirection,
                        orderDisplay,
                        paginationDirectionToDb,
                        cursorFirstId,
                        cursorFirstCmtNumber,
                        postPerPage,
                    );
                }
            }
        }

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
        // console.log({ postQuantity });

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
        // console.log({ userId });

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
