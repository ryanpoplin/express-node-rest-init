"use strict";
	
// get the config object for port and db URI based on process.env.NODE_ENV value
const config = require("./config"), // get the config.js file in the current dir
	  mongoose = require("mongoose"); // get the std. mongoose module

module.exports = function() {
	// connect to our database URI
	return mongoose.connect(config.db);
};