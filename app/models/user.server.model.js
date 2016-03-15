"use strict";

const mongoose = require("mongoose"), // require the std. mongoose module
	  // crypto = require("crypto"), // salt/hash keys in the database for security
      Schema = mongoose.Schema; // grab the Schema constructor class from mongoose

// our custom User schema (editable keys)
const UserSchema = new Schema({
	// edit this!
	name: {type: String, unique: true, required: true}, // all usernames must be unique
	email: {type: String, unique: true, required: true, index: true}, // 2ndary index
	username: {type: String, unique: true, required: true}, 
	password: {type: String, unique: false, required: true, /*provider: String, providerId: String, providerData: {},*/ tasks: {}}
});

// UserSchema.pre("save", function(next) { // also post for middleware
// 	if (this.password) {
// 		const md5 = crypto.createHash("md5"); // get hash object
// 		this.password = md5.update(this.password).digest("hex"); // alter our password with the hash functionality
// 	}
// 	next();
// });

// UserSchema.methods.authenticate = function(password) {
// 	const md5 = crypto.createHash("md5");
// 	md5 = md5.update(password).digest("hex"); // hash the 'password' arg
// 	return this.password === md5; // compare to see if they're the same passwords
// };

// UserSchema.statics.findUniqueUserName = function(username, suffix, callback) {
// 	const _this = this;
// 	const possibleUsername = username + (suffix || "");
// 	this.findOne({
// 		username: possibleUsername
// 	}, function(err, user) {
// 		if (!err) {
// 			if (!user) {
// 				callback(possibleUsername);
// 			} else {
// 				return _this.findUniqueUserName(username, (suffix || 0) + 1, callback);
// 			}
// 		} else {
// 			callback(null);
// 		}
// 	});
// };

// create and export our User mongoose model schema
// this will be the name of the collection stored in the todos database: users, etc...
// s is added to the end of the collection automatically via mongoose module
module.exports = mongoose.model("User", UserSchema);