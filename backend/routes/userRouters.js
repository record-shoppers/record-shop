const express = require("express");
const userRouters = express.Router();
const {
  getUsers,
  addUser,
  getUser,
  updateUserInformation,
  updateUserAvatar,
} = require("../controllers/userControllers");
const { validateUser, validatePassword } = require("../middleware/validation");

userRouters
  .route("/")
  .get(getUsers)
  .post(validateUser, validatePassword, addUser);
userRouters
  .route("/:id")
  .get(getUser)
  .put(updateUserAvatar)
  .put(updateUserInformation);

module.exports = userRouters;
