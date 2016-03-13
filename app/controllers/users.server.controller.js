"use strict";

// require our mongoose User model
const User = require("../models/user.server.model");

// TODO: research more on next() passed along via express

// CHECK OUT REVEAL MODULE PATTERN: E.O.W: module.exports = {create: create, list: list};

// CREATE

// export a create method that will act as a middleware...
module.exports.create = function(req, res, next) {
	// create a user with the req.body data (parsed via the body-parser module's middleware)
	// nice to see in the terminal for now...
	console.log(req.body);
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

// READ

// find all users (only useful in certain situations in API's)
module.exports.list = function(req, res, next) {
	User.find({}, function(err, users) { // {} means get them all, no arguements
		if (err) {
			return next(err); // handle this error
		} else {
			res.json(users); // return all the users from the database to the client
		}
	});
};

// route middleware
// get a specific user data via id, and add that data onto the req object via mutating it, and adding a .user property...
module.exports.userByID = function(req, res, next, id) {

	// console.log("userByID");

	// good example of refactoring with promises...
	User.findOne({ // mongoose for find one document from the collection
		_id: id
	}, function(err, user) { // TODO: refactor with promise
		if (err) {
			return next(err);
		} else {
			req.user = user; // set user data
			next();
		}
	});
};

// get the req.user object and send it to the client
module.exports.read = function(req, res) {

	// console.log("read");

	res.json(req.user); // get our data
};

// UPDATE

module.exports.update = function(req, res, next) { // update a certain user
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user) { // auto alter req.body differences from current document data
		if (err) {
			return next(err);
		} else {
			res.json(user); // get our data
		}
	});
};

// DELETE

// delete certain user
module.exports.delete = function(req, res, next) {
	req.user.remove(function(err) { // since our user has been added to the req.user
		// we can reference that value to remove it from our database
		if (err) {
			return next(err);
		} else {
			res.json(req.user); // get our user who was deleted
		}
	});
};