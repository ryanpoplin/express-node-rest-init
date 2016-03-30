"use strict";

// TODO: for HLS strings and 3rd-party
module.exports = function alterPropertiesFromUsersArray(users) {
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