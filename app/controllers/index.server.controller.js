"use strict";

exports.render = function(req, res) {
	res.render("index", {
		// this data will come from the model and the models data will come from mongodb.
		title: "Express.js"
	});
};