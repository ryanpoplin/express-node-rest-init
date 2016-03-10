"use strict";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.PORT = 8080;
// process.env.IP = ...

const config = require("./config/config"),
      mongoose = require("./config/mongoose"),
      express = require("./config/express");

const db = mongoose(),
	  // express is instantiated from our express.js configuration file
	  // require the module in, and invoke the function it provides
	  // which returns our express applicatoin instance
      app = express();

// can add process.env.IP, too...
app.listen(config.port);

// da fuk?
module.exports = app;

console.log("Server is running at http://localhost:" + config.port);