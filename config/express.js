"use strict";

const express = require("express"), // grab our express module
	  config = require("./config"), // grab our config file
	  bodyParser = require("body-parser"), // grab our body-parser module
	  morgan = require("morgan");

module.exports = function() {
	const app = express(); // create an instance of express (express app)

	// add middleware 
	app.use(bodyParser.urlencoded({ // use body-parser to grab data from POST requests
		extended: true // encode our url's...
	}));
	app.use(bodyParser.json()); // expect JSON data format
	// CORS settings allows our API to be accessed from bascially anywhere...
	app.use(function(req, res, next) { // CORS requests
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
		next();
	});

	app.use(morgan("dev")); // log all requests to the console...

	app.use(express.static("./public")); // expect all static files to come from 
										 // ./public dir

	app.set("views", "./app/views"); // expect our views to come from ./app/views dir
	app.set("view engine", "ejs"); // set template engine: ejs module

	// express.Router() is like mini-application on its own; only with routing functionalities though...
	// load in our index routes
	const indexRouter = express.Router();
	require("../app/routes/index.server.routes")(indexRouter);

	// load in our users routes
	// NOTE: make sure postman content-type is set to JSON
	const usersRouter = express.Router();
	require("../app/routes/users.server.routes")(usersRouter); // grab the user.server.routes function
	
	app.use("/api/index", indexRouter); // register the routes with our custom routers 
	app.use("/api/users", usersRouter); 

	// return the express app for the server.js file
	return app;
};