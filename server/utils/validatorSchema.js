const { body, query } = require('express-validator');

const firstLastNameMinLength = 1;
const firstLastNameMaxLength = 30;
const userNameMinLength = 3;
const userNameMaxLength = 16;
const passwordMinLength = 8;
const passwordMaxLength = 32;
const bioMaxLength = 600;
const postTitleMinLength = 1;
const postTitleMaxLength = 100;
const postContentMinLength = 1;
const postContentMaxLength = 1600;
const commentMinLength = 1;
const commentMaxLength = 600;

const firstNameValidatorSchema = [
    body('firstName')
        .not()
        .isEmpty()
        .withMessage('First name must be filled')
        .trim()
        .isLength({ min: firstLastNameMinLength, max: firstLastNameMaxLength })
        .withMessage(`First name must be between ${firstLastNameMinLength} and ${firstLastNameMaxLength} characters`),
];

const lastNameValidatorSchema = [
    body('lastName')
        .not()
        .isEmpty()
        .withMessage('Last name must be filled')
        .trim()
        .isLength({ min: firstLastNameMinLength, max: firstLastNameMaxLength })
        .withMessage(`Last name must be between ${firstLastNameMinLength} and ${firstLastNameMaxLength} characters`),
];

const userNameValidatorSchema = [
    body('userName')
        .not()
        .isEmpty()
        .withMessage('User name must be filled')
        .trim()
        .isLength({ min: userNameMinLength, max: userNameMaxLength })
        .withMessage(`User name must be between ${userNameMinLength} and ${userNameMaxLength} characters`),
];

const passwordValidatorSchema = [
    body('pwd')
        .not()
        .isEmpty()
        .withMessage('Password must be filled')
        .trim()
        .isLength({ min: passwordMinLength, max: passwordMaxLength })
        .withMessage(`Password must be between ${passwordMinLength} and ${passwordMaxLength} characters`)
        .matches(/[A-Z]/)
        .withMessage('Password must include at least one uppercase letter')
        .matches(/[a-z]/)
        .withMessage('Password must include at least one lowercase letter')
        .matches(/[0-9]/)
        .withMessage('Password must include at least one number')
        .matches(/[,.?/!@#$%^&*()\-_=+]/)
        .withMessage('Password must include at least one symbol (,.?/!@#$%^&*()-_=+)'),
];

const isAdminValidatorSchema = [body('isAdmin').not().isEmpty().toBoolean().isBoolean()];

const birthdayDateValidatorSchema = [body('birthdayDate').isISO8601().withMessage('Invalid date format')];

const bioValidatorSchema = [
    body('bio')
        .optional({ values: 'falsy' })
        .trim()
        .isLength({ max: bioMaxLength })
        .withMessage('Bio must be at most 600 characters'),
];

const postTitleValidatorSchema = [
    body('postTitle')
        .not()
        .isEmpty()
        .withMessage('Post title must be filled')
        .isLength({ min: postTitleMinLength, max: postTitleMaxLength })
        .withMessage(`Post title must be between ${postTitleMinLength} and ${postTitleMaxLength} characters`),
];

const postContentValidatorSchema = [
    body('postContent')
        .not()
        .isEmpty()
        .withMessage('Post content must be filled')
        .isLength({ min: postContentMinLength, max: postContentMaxLength })
        .withMessage(`Post content must be between ${postContentMinLength} and ${postContentMaxLength} characters`),
];

const commentContentValidatorSchema = [
    body('comment')
        .not()
        .isEmpty()
        .withMessage('Comment content must be filled')
        .isLength({ min: commentMinLength, max: commentMaxLength })
        .withMessage(`Comment content must be between ${commentMinLength} and ${commentMaxLength} characters`),
];

module.exports = {
    firstNameValidatorSchema,
    lastNameValidatorSchema,
    userNameValidatorSchema,
    passwordValidatorSchema,
    isAdminValidatorSchema,
    birthdayDateValidatorSchema,
    bioValidatorSchema,
    postTitleValidatorSchema,
    postContentValidatorSchema,
    commentContentValidatorSchema,
};
