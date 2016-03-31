"use strict";

// // TODO: just remove these guys via mongoose
// // for 3rd-party
// module.exports = function removePropertiesFromUsersArray(users) {
// 	users.forEach(function(user) {
// 		Object.keys(user).forEach(function(key) {
// 			switch (key) {
// 				case "_id":
// 					delete user["_id"];
// 					break;
// 				case "__v":
// 					delete user["__v"];
// 					break;
// 				case "password":
// 					delete user["password"];
// 					break;
// 				case "email":
// 					delete user["email"];
// 					break;
// 				default:
// 					break;
// 			}
// 		});
// 	});
// 	return users;
// }