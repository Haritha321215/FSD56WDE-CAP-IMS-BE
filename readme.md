# Backend application
 this repository contains the backend application for the frontend application 

 back end application in a RESTful API built with Node.js and Express.js. it uses MongoDB as the database,

 ## Installation
    1. clone the repository
    2. Run "npm install" to install the dependencies
    3. Create a -env file in the root directory and add following enviroonment variables
      MONGODB_URI :Mongodb connection string
      PORT : Port number for the server
    4. Run npm run dev t start the server


## Application

## Features
 - [x] User registration
 - [x] User login



- [] User Dashboard
    - [] View Profile
    - [] Update Profile
    - [] Delete Profile
    - [] Logout

## API Endpoints

### Users
- POST /api/users/register: Register a new user
- POST /api/users/login: Login a user
- GET /api/users/profile: Get the user profile
- GET /api/users/logout: logout the user
- PUT /api/users/profile: Update the user profile
- DELETE /api/users/profile: Delete the user profile



## Licences

## Libraries Used
  - mongoose : Mongodb object modeling tool. It is used to interact with Mongodb database. We use this instead of mongodb driver because it provides a sample schema-based solution to model our application data.







  npm i mongoose
  npm i dotenv  -(library to handle .envfiles)
  npm i express
  npm install --save-dev nodemon
  npm i jsonwebtoken
  npm i cors
  npm i cookie-parser
  npm i morgan  // log
