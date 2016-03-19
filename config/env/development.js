"use strict";

// export the development config object with the server port and database URI
module.exports = {
	port: process.env.PORT || 8080,
	// fine for development, however; production will most likely be hosted on a 
	// 3rd party service like mongolab (new name)
	// we're using the todos database which has multiple collections of documents
	// refers to our todos database in mongo
	db: "mongodb://localhost/todos"		
};