"use strict";

const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
	// get user model data...
	name: String,
	email: String,
	username: String, 
	password: String
});

mongoose.model("User", UserSchema);