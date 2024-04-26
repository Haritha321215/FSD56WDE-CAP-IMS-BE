// import the express router
const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

// define the end pointes

//POST/api/users/register : Register a new user
userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);

//export the router
module.exports = userRouter;
