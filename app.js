// require express
const express = require("express"); 

//import user router
const userRouter = require("./routes/userRoutes");

// create an express application
const app = express();

//define the end points
app.use('/api/users',userRouter)

// export the app module
module.exports= app;