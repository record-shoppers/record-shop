const express = require('express');
const userRouters = express.Router();
const {
    getUsers,
    addUser,
    getUser
} = require('../controllers/userControllers');
const { 
    checkUser,
    validateUser,
    validatePassword
} = require('../middleware/validation');


userRouters.route('/').get(getUsers).post(validateUser, validatePassword, checkUser, addUser);
userRouters.route('/:id').get(getUser);

module.exports = userRouters;