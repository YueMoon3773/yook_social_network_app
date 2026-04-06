const express = require('express');

const commentController = require('../controller/commentController');

const commentRouter = express.Router();

commentRouter.get('/comments-by-user/:userName', commentController.getCommentsBySpecificUser);
commentRouter.get('/comments-from-post/:postId', commentController.getCommentsOfSpecificPost);
commentRouter.post('/add-comment-to-post/:postId',commentController.postCommentsToSpecificPost);

module.exports = commentRouter;
