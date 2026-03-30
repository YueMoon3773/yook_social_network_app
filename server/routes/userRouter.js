const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/authenticate/me', userController.userAuthenticateActiveSession);
userRouter.post('/log-in', userController.logInPost);
userRouter.post('/log-out', userController.logOutPost);

module.exports = userRouter;
