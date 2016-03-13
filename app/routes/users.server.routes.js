"use strict";

// grab our users controller create method
const users = require("../../app/controllers/users.server.controller");

module.exports = function(app) { // will pass in our express app instance
	// on the /users route via the POST HTTP verb; invoke the users.create() method
	app.route("/users").post(users.create).get(users.list);
		// route middleware method === param()
	app.param("userId", users.userByID); // I.O.W: users.userByID will execute before users.read executes
	// request parameter === :
	app.route("/users/:userId").get(users.read).put(users.update).delete(users.delete); // pass in a request parameter as an arg.
};