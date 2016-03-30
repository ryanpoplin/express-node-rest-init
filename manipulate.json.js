"use strict";

module.exports = function() {
	const request = require("superagent");
	request.get("http://localhost:8080/api/users/list").end(function(err, res) {
		if (err) {
			console.log(err);
		} else {
			const jsonStructureAccess = res.body["Best Users"]["Current Best Users"];
			removePropertiesFromUsersArray(jsonStructureAccess);
			updatePropertiesFromUsersArray(jsonStructureAccess);
			console.log(JSON.stringify(res.body));
		}
	});
};

// remove, works perfectly
function removePropertiesFromUsersArray(users) {
	users.forEach(function(user) {
		Object.keys(user).forEach(function(key) {
			switch (key) {
				case "_id":
					delete user["_id"];
					break;
				case "__v":
					delete user["__v"];
					break;
				case "password":
					delete user["password"];
					break;
				case "email":
					delete user["email"];
					break;
				default:
					break;
			}
		});
	});
	return users;
}

function updatePropertiesFromUsersArray(users) {
	users.forEach(function(user) {
		Object.keys(user).forEach(function(key) {
			switch (key) {
				case "test":
					user["newProp"] = user["test"];
					delete user["test"];
					break;
				case "arrayOfValues":
					if (user[key].length > 0) {
						if (user[key].indexOf("1080p") !== -1) {
							user["quality"] = "1080p";
						} else if (user[key].indexOf("720p") !== -1) {
							user["quality"] = "720p";
						} else {
							user["quality"] = "480p";
						} 
						delete user["arrayOfValues"];
					} else {
						delete user["arrayOfValues"];
					}
					break;
				default: 
					break;
			}
		});
	});
	return users;
}