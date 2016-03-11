"use strict";

// set the global environment variable
// this is useful for determining if the the system is in development or production mode
// this value is set on the server generally
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// returns an config object for our server port and database URI
// based on a development or production setting
const config = require("./config/config"), // get the development or production config
      mongoose = require("./config/mongoose"), // get our function to invoke for our mongoose database connection
      express = require("./config/express"); // grab our configured express application

const db = mongoose(), // invoke the module's function to connect to our mongodb
	  // express is instantiated from our express.js configuration file
	  // require the module in, and invoke the function it provides
	  // which returns our express application instance
      app = express(); // just get our express app

app.listen(config.port);

console.log("Server is running at http://localhost:" + config.port);
"use strict";

exports.render = function(req, res) {
	res.render("index", {
		title: "Express.js"
	});
};
"use strict";

// require our mongoose User model
const User = require("../models/user.server.model");

// export a create method that will act as a middleware...
exports.create = function(req, res, next) {
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
module.exports = mongoose.model("User", UserSchema);
"use strict";

module.exports = function(app) {
	const index = require("../controllers/index.server.controller");
	app.get("/", index.render);
};
"use strict";

// grab our users controller create method
const users = require("../../app/controllers/users.server.controller");

module.exports = function(app) { // will pass in our express app instance
	// on the /users route via the POST HTTP verb; invoke the users.create() method
	app.route("/users").post(users.create);
};
"use strict";

// dynamically export the development or production config via the
// process.env.NODE_ENV value
module.exports = require("./env/" + process.env.NODE_ENV + ".js");
"use strict";

const express = require("express"), // grab our express module
	  config = require("./config"), // grab our config file
	  bodyParser = require("body-parser"); // grab our body-parser module

module.exports = function() {
	const app = express(); // create an instance of express (express app)

	// add middleware 
	app.use(bodyParser.urlencoded({
		extended: true // encode our url's...
	}));
	app.use(bodyParser.json()); // expect JSON data format
	// CORS (TODO: research this a lot more...)
	app.use(function(req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
		next();
	});

	app.use(express.static("./public")); // expect all static files to come from 
										 // ./public dir

	app.set("views", "./app/views"); // expect our views to come from ./app/views dir
	app.set("view engine", "ejs"); // set template engine: ejs module

	// not worried about the index route just yet...
	require("../app/routes/index.server.routes")(app); 
	// NOTE: make sure postman content-type is set to JSON!!!
	require("../app/routes/users.server.routes")(app); // grab the user.server.routes function
	
	// return the express app for the server.js file
	return app;
};
"use strict";
	
// get the config object for port and db URI based on process.env.NODE_ENV value
const config = require("./config"), // get the config.js file in the current dir
	  mongoose = require("mongoose"); // get the std. mongoose module

module.exports = function() {
	// connect to our database URI
	return mongoose.connect(config.db);
};
"use strict";

// export the development config object with the server port and database URI
module.exports = {
	port: 8080,
	// fine for development, however; production will most likely be hosted on a 
	// 3rd party service like mongolab (new name)
	// we're using the todos database which has multiple collections of documents
	db: "mongodb://localhost/todos"		
};