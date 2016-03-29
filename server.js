"use strict";

// set the global environment variable
// this is useful for determining if the the system is in development or production mode
// this value is set on the server generally
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// returns an config object for our server port and database URI
// based on a development or production setting
const config = require("./config/config"), // get the development or production config
      mongoose = require("./config/mongoose"), // get our function to invoke for our mongoose database connection
      express = require("./config/express"); // grab our configured express application

const db = mongoose(),
	  // invoke the module's function to connect to our mongodb
	  // express is instantiated from our express.js configuration file
	  // require the module in, and invoke the function it provides
	  // which returns our express application instance
      app = express(); // just get our express app

// TODO: find a better way to implement this...
app.listen(config.port, "127.0.0.1", function() {
	const request = require("superagent");
	request.get("http://localhost:8080/api/users/list").end(function(err, res) {
		if (err) {
			console.log(err);
		} else {
			console.log(JSON.stringify(res.body));
		}
	});
}); // tell our node.js server which port to listen to for connections over the network

// just a log to let us know the server.js file was read.
console.log("Server is running at http://localhost:" + config.port);