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

app.listen(config.port);

// just a log to let us know the server.js file was read.
console.log("Server is running at http://localhost:" + config.port);