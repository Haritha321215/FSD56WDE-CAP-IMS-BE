// business logic

// import the user model
const User = require("../models/user");

// import bcrypt
const bcrypt = require("bcrypt");

// import json web token
const jwt = require("jsonwebtoken");

//import config file
const config = require("../utils/config");

//define the user controller
const userController = {
  // register end point
  register: async (request, response) => {
    try {
      // response.send("Register a new user")

      // get the user inputs from the request body
      // to parse the json request body, we need to use middle ware
      // for that we can use express json / body parser
      // console.log(request.body);

      // destructure the request body
      const { username, password, name, location } = request.body;

      // checks if the user is already in the database
      // need to create user model
      const user = await User.findOne({ username });

      // if user exits, return an error
      //other wise create new user object and save it in db
      if (user) {
        return response.status(400).json({ message: "User already exists" });
      }

      // if user does not exits create new user
      // we should not store actual password, need to encode it by hashing
      // for hashing need to install bcrypt module, npm install bcrypt
      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        passwordHash,
        name,
        location,
      });

      // save the user in database
      const saveUser = await newUser.save();

      // return the saved user respose to the front end
      response.status(201).json({
        message: "user created successfully",
        user: saveUser,
      });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
  login: async (request, response) => {
    try {
      // get the username and pass from the request body
      // authentication
      const { username, password } = request.body;

      //check if the user exists in the database
      const user = await User.findOne({ username });

      // if user does not exits, return an error
      if (!user) {
        return response.status(400).json({ message: "User not found" });
      }

      // if the user exists check if the password is correct
      const isPasswordCorrect = await bcrypt.compare(
        password,
        user.passwordHash
      );

      //if the password is incorrect return error
      if (!isPasswordCorrect) {
        return response.status(400).json({ message: "Invalid credentials" });
      }

      // if the password is correct, generaye a token for the user and return it
      // for that we need JWTmodule by  npm i jsonwebtoken
      const token = jwt.sign(
        {
          username: user.username,
          id: user._id,
          name: user.name,
        },
        config.JWT_SECRET
      ); // create variable .env

      // set the cokies to handle secure authentication
      response.cookie("token", token, {
        httpOnly: true, // only accepts http
        sameSite: "none",
        expires: new Date(Date.now() + 24 * 60 * 1000), // 24 hours
        secure: true,
      });

      // return token
      response.json({message: 'login successful', token});
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

module.exports = userController;
