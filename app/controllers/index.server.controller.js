"use strict";

module.exports.render = function(req, res) {
	res.render("index", {
		title: "Express.js"
	});
};