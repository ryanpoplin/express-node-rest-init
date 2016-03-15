// "use strict";

// const passport = require("passport"), // get our modules
//       mongoose = require("mongoose");

// module.exports = function() {
// 	const User = require("../app/models/user.server.model"); // get our user model

// 	passport.serializeUser(function(user, done) {
// 		done(null, user.id);
// 	});

// 	passport.deserializeUser(function(id, done) {
// 		User.findOne({
// 			_id: id
// 		}, "-password", function(err, user) {
// 			done(err, user);
// 		});	
// 	});

// 	require("./strategies/local")();
// };