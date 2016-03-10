"use strict";

// set the global environment variable
// this is useful for determining if the the system is in development or production mode
// this value is set on the server generally
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// returns an config object for our server port and database URI
// based on a development or production setting
const config = require("./config/config"), // get the development or production config
      mongoose = require("./config/mongoose"), // 
      express = require("./config/express");

const db = mongoose(),
	  // express is instantiated from our express.js configuration file
	  // require the module in, and invoke the function it provides
	  // which returns our express applicatoin instance
      app = express();

// can add process.env.IP, too...
app.listen(config.port);

// da fuk are we doing here?
module.exports = app;

console.log("Server is running at http://localhost:" + config.port);