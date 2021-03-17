const express = require('express');
const userRouters = express.Router();
const {
    getUsers,
    addUser,
    getUser,
    checkUser,
    validateUser,
    validatePassword
} = require('../controllers/userControllers');

userRouters.route('/').get(getUsers).post(validateUser, validatePassword, addUser);
userRouters.route('/:id').get(checkUser, getUser);

module.exports = userRouters;