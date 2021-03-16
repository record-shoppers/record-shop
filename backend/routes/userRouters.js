const express = require('express');
const userRouters = express.Router();
const {
    getUsers,
    addUser,
    getUser
} = require('../controllers/userControllers');

userRouters.route('/').get(getUsers).post(addUser);
userRouters.route('/:id').get(getUser);

module.exports = userRouters;