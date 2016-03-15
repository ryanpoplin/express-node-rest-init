// "use strict";

// const passport = require("passport"), // get passport module
// 	  LocalStrategy = require("passport-local").Strategy, // get local strat. object
// 	  User = require("../../app/models/user.server.model"); // alt. way of accessing this file.

// module.exports = function() {
// 	// register the strat. 
// 	passport.use(new LocalStrategy(function(username, password, done) { // create a new LocalStrategy object instance and expect a username, password, and done method to come back to use for use in the cb. 
// 		User.findOne({ // find our user
// 			username: username
// 		}, function(err, user) {
// 			if (err) {
// 				return done(err); // return on error
// 			}
// 			if (!user) {
// 				return done(null, false, {message: "Unknown user"}); // return unknown user
// 			}
// 			if (!user.authenticate(password)) {
// 				return done(null, false, {message: "Invalid password"}); // return incorrect password
// 			}
// 			return done(null, user); // return the valid user
// 		});
// 	}));
// };