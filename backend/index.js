'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 5000;

mongoose.Promise = global.Promise;
var config = require("./config.json")
mongoose.connect(config.dev.connectionString)
.then(res => {
    console.log("Connected");

    // create server
    app.listen( port, () => {
       console.log(`Server listening on port ${port}...`); 
    });
})
.catch(err => console.log(`Error: ${err}`));