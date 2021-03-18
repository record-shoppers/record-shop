const express = require('express');
const loginRouters = express.Router();

const {checkUser} = require('../controllers/loginControllers');


userRouters.route('/').post(checkUser);

module.exports = loginRouters;