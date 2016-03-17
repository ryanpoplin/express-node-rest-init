"use strict";

module.exports = function(indexRouter) {
	const index = require("../controllers/index.server.controller");
		
	// middleware test
	indexRouter.use(function(req, res, next) {
		console.log(req.method, req.url);
		console.log("indexRouter");
		next();
	});

	indexRouter.get("/", index.render);
};