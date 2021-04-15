const express = require("express");
const userRouters = express.Router();
const {
  getUsers,
  addUser,
  getUser,
  updateUserInformation,
  updateUserAvatar,
} = require("../controllers/userControllers");
const {
  userValidationRules,
  userValidationErrorHandling,
} = require("../middleware/validation");

const {
  addRecord,
  deleteAllRecords,
} = require("../controllers/basketControllers");

userRouters
  .route("/")
  .get(getUsers)
  .post(userValidationRules(), userValidationErrorHandling, addUser);
userRouters
  .route("/:id")
  .get(getUser)
  .put(updateUserAvatar)
  .put(updateUserInformation);

userRouters.route("/:userID/basket/:basketID").post(addRecord);
userRouters.route("/delete").delete(deleteAllRecords);

module.exports = userRouters;
