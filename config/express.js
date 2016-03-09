"use strict";

const express = require("express");
module.exports = function() {
	const app = express();

	// forcefully running this code for now...
	require("../app/routes/index.server.routes")(app);
	
	return app;
};