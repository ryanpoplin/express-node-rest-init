"use strict";

process.env.PORT = 8080;
// process.env.IP = ...

// express is instantiated from our express.js configuration file
// require the module in, and invoke the function it provides
// which returns our express applicatoin instance
const app = require("./config/express")();

// can add process.env.IP, too...
app.listen(process.env.PORT);

console.log("Server is running at http://localhost:" + process.env.PORT);