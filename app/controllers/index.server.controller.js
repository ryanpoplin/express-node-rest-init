"use strict";

module.exports.render = function(req, res) {
	// res.render("index", {
	// 	title: "Express.js"
	// });
	res.json({
		"index": "here's some json for our response..."
	});
};