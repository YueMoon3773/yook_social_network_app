const express = require('express');
const postController = require('../controller/postController');

const postRouter = express.Router();

postRouter.get('/get-posts', postController.getPosts);
postRouter.get('/get-post-quantity', postController.getPostQuantity);
postRouter.get('/posts-by-user/:userName', postController.getPostsBySpecificUser);

module.exports = postRouter;
