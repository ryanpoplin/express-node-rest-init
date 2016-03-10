"use strict";

const config = require("./config"), 
	  mongoose = require("mongoose");

module.exports = function() {
	require("../app/models/user.server.model");
	return mongoose.connect(config.db);
};