"use strict";

// require our mongoose User model
const User = require("../models/user.server.model");

// export a create method that will act as a middleware...
exports.create = function(req, res, next) {
	// create a user with the req.body data (parsed via the body-parser module's middleware)
	const user = new User(req.body);
	// run the save method and create our callback
	user.save(function(err) {
		if (err) {
			// if there's an error creating the user; next(err); (handle this error accordingly)
			return next(err);
		} else {
			// no error?; respond to the client with the JSON of the created user data
			res.json(user);
		}
	});
};