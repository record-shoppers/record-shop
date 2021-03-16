const express = require('express');
const userRoutes = express.Router();
const {
    getUsers,
    addUser,
    getUser
} = require('../controllers/userControllers');

userRoutes.route('/').get(getUsers).post(addUser);
userRoutes.route('/:id').get(getUser);

module.exports = userRoutes;