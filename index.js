// import the mongoose module 
const mongoose = require('mongoose');

// import the config file
const config = require("./utils/config")

// console.log the message Connecting to MongoDB 
console.log('Connecting to MongoDB');

// create the database
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');

        // start the server
        // listen to the port
        // app.listen(config.PORT, () => {
        //     console.log(`Server running on port ${config.PORT}`);
        // });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message);
    });
