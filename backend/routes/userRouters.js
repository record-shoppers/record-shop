const express = require('express');
const userRouters = express.Router();
const {
    getUsers,
    addUser,
    getUser
} = require('../controllers/userControllers');
const { 
    validateUser,
    validatePassword
} = require('../middleware/validation');


userRouters.route('/').get(getUsers).post(validateUser, validatePassword, addUser);
userRouters.route('/:id').get(getUser);

module.exports = userRouters;