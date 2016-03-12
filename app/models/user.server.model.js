"use strict";

const mongoose = require("mongoose"), // require the std. mongoose module
      Schema = mongoose.Schema; // grab the Schema constructor class from mongoose

// our custom User schema (editable keys)
const UserSchema = new Schema({
	// edit this!
	name: String,
	email: String,
	username: String, 
	password: String
});

// create and export our User mongoose model schema
// this will be the name of the collection stored in the todos database: users, etc...
// s is added to the end of the collection automatically via mongoose module
module.exports = mongoose.model("User", UserSchema);