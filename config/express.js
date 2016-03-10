"use strict";

const express = require("express"),
	  config = require("./config"),
	  bodyParser = require("body-parser");

module.exports = function() {
	const app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	app.set("views", "./app/views");
	app.set("view engine", "ejs");

	app.use(express.static("./public"));

	require("../app/routes/index.server.routes")(app);
	require("../app/routes/users.server.routes")(app);
	
	return app;
};