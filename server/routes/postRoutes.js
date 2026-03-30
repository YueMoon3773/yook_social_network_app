const express = require('express');
const postController = require('../controller/postController');

const postRouter = express.Router();

postRouter.get('/get-posts', postController.getPosts);
postRouter.get('/get-post-quantity', postController.getPostQuantity);

module.exports = postRouter;
