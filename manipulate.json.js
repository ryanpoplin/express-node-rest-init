"use strict";

const removePropertiesFromUsersArray = require("./remove.user.data");
const alterPropertiesFromUsersArray = require("./alter.user.data");

// reformat some data for users for their streaming video requirements off my API, and possibly others
module.exports = function() {
	const request = require("superagent");
	request.get("http://localhost:8080/api/users/list").end(function(err, res) {
		if (err) {
			console.log(err);
		} else {
			const usersArr = res.body["Best Users"]["Current Best Users"];
			removePropertiesFromUsersArray(usersArr);
			alterPropertiesFromUsersArray(usersArr);
			console.log(JSON.stringify(res.body));
		}
	});
};