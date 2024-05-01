// require express
const express = require("express");

//require cors
const cors = require("cors");

//require cookie-parser
const cookieParser = require("cookie-parser");

// require morgan fpr logs
const morgan = require('morgan')

//import user router
const userRouter = require("./routes/userRoutes");

//import product router
const productRouter = require("./routes/productRoutes");

// create an express application
const app = express();

// we need cors for front end
// npm i cors
// need cookie parser also
// npm i cookie-parser

//enable all cors requests
app.use(
  cors({
    origin: "https://fsd56wde-cap-ims-fe.netlify.app", // allow all origins
    credentials: true,
  })
);

// use morgan to log requests to the console
app.use(morgan('dev'));

//use cookie parser
app.use(cookieParser());

// we need to enable the express application to parse json
app.use(express.json());

//define the end points
app.use("/api/users", userRouter);
app.use("/api/products", productRouter)

// export the app module
module.exports = app;
