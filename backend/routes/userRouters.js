const express = require('express');
const userRouters = express.Router();
const {
    getUsers,
    addUser,
    getUser,
    checkUser,
    validateUser
} = require('../controllers/userControllers');

userRouters.route('/').get(getUsers).post(validateUser, addUser);
userRouters.route('/:id').get(checkUser, getUser);

module.exports = userRouters;