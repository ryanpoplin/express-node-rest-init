"use strict";

// grab our users controller create method
const users = require("../../app/controllers/users.server.controller");

module.exports = function(usersRouter) { // will pass in our express app instance

	// middleware test...
	usersRouter.use(function(req, res, next) {
		console.log(req.method, req.url);
		console.log("usersRouter");
		next();
	});

	// on the /users route via the POST HTTP verb; invoke the users.create() method
	usersRouter.route("/create").post(users.create);
	usersRouter.route("/list").get(users.list);
	// route middleware method === param()
	usersRouter.param("userId", users.userByID); // I.O.W: users.userByID will execute before users.read executes
	// request parameter === :
	usersRouter.route("/:userId").get(users.read).put(users.update).delete(users.delete); // pass in a request parameter as an arg.
};