"use strict";

const mongoose = require("mongoose"), // require the std. mongoose module
      Schema = mongoose.Schema; // grab the Schema constructor class from mongoose

// our custom User schema (editable keys)
const UserSchema = new Schema({
	name: String,
	email: String,
	username: String, 
	password: String
});

// create and export our User mongoose model schema
module.exports = mongoose.model("User", UserSchema);