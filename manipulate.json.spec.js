"use strict";

const request = require("superagent");
const expect = require("chai").expect;
// const remove = require("./manipulate.json.js").remove;
// const alter = require("./manipulate.json.js").alter;

describe("express rest api server", function() {
	     
	it("should pass basic fault test", function(done) {
		request.get("http://localhost:8080/api/users/list").end(function(err, res) {
			expect(err).to.equal(null);
			expect(res.status).to.equal(200);
			expect(res.body["Best Users"]["Current Best Users"]).to.have.length.above(0);
			done();
		});
	});

	it("should confirm JSON schema output expectations", function(done) {
		request.get("http://localhost:8080/api/users/list").end(function(err, res) {
			const usersArr = res.body["Best Users"]["Current Best Users"];
			// var newArr = remove(usersArr);
			// var newerArr = alter(newArr);
			usersArr.forEach(function(user) {
				console.log(user);
				Object.keys(user).forEach(function(key) {
					switch (key) {
						case "newProp":
							expect(key).to.be.a("string");
							console.log(key);
							break;
						case "quality":
							expect(key).to.be.a("string");
							console.log(key);
							break;
						case "username":
							expect(key).to.be.a("string");
							console.log(key);
							break;
						case "name":
							expect(key).to.be.a("string");
							console.log(key)
							break;
						default:
							break;
					}
				});
			});
			done();
		});
	});

});