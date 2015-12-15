"use strict";

var fallBackPort = 31456;

// BASE SETUP
// =============================================================================
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');         // Mongoose DB

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || fallBackPort;        // set our port.
                                            // Takes PORT from the environment variables, or port 8080

// SCHEMAS FOR OUR API
// =============================================================================
var Schema = mongoose.Schema;               // Mongoose Schemas

$.getScript('server/schemas.js', function() {
  console.log("Schemas loaded");
});

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// Load the routes from another script
$.getScript('server/routes.js', function() {
  console.log("Routes loaded");
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
window.focus();
alert('API is live on port: ' + port);
