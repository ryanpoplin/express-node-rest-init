"use strict";

const express = require("express");
module.exports = function() {
	const app = express();

	app.set("views", "./app/views");
	app.set("view engine", "ejs");

	app.use(express.static("./public"));

	// forcefully running this code for now...
	require("../app/routes/index.server.routes")(app);
	
	return app;
};