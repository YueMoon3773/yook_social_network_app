const express = require('express');
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/authenticate/me', userController.userAuthenticateActiveSession);
userRouter.post('/log-in', userController.logInPost);
userRouter.post('/log-out', userController.logOutPost);
userRouter.post('/register', userController.userRegisterPost);
// userRouter.get('/user-info/:userId', userController.userInfoByUserId);
userRouter.get('/user-info/:userName', userController.userInfoByUserName);
userRouter.post('/update-profile/:userId', userController.updateProfilePost);

module.exports = userRouter;
