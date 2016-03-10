"use strict";

// dynamically export the development or production config via the
// process.env.NODE_ENV value
module.exports = require("./env/" + process.env.NODE_ENV + ".js");