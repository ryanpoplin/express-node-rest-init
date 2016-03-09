"use strict";

process.env.PORT = 8080;
// process.env.IP = ...

const express = require("express");
const app = express();

app.use("/", function(req, res) {
	res.send("Hello Express Application!");
});

// can add process.env.IP, too...
app.listen(process.env.PORT);

console.log("Server is running at http://localhost:" + process.env.PORT);