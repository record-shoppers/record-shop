const express = require("express");
const basketRouters = express.Router();

const {
  getBaskets
} = require("../controllers/basketControllers");


basketRouters.route("/").get(getBaskets);

module.exports = basketRouters;
