// import the mongoose module
const mongoose = require('mongoose');

// import the config module
const config = require('./utils/config');

// import the app module
const app = require('./app');

// console.log the message Connecting to MongoDB
console.log('Connecting to MongoDB...');

// connect to the database
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB...');

        // start the server
        // listen to the port
        // we can do it outside of the database connection
        // but we want the server should run after establishing the connection to mongodb successfully
        app.listen(config.PORT, () => {
            console.log(`Server running on port ${config.PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message);
    });

    // app.listen(config.PORT, () => {
    //     console.log(`Server running on port ${config.PORT}`);
    // });