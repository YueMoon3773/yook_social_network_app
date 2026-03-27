const express = require('express');
const postController = require('../controller/postController');

const postRouter = express.Router();

postRouter.get('/get-posts', postController.getPosts);

module.exports = postRouter;
