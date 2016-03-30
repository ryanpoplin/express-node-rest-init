"use strict";

const request = require("superagent");
const expect = require("chai").expect;

const remove = require("./remove.user.data");
const alter = require("./alter.user.data");

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
			remove(usersArr);
			alter(usersArr);
			usersArr.forEach(function(user) {
				Object.keys(user).forEach(function(key) {
					switch (key) {
						case "newProp":
							expect(key).to.be.a("string");
							break;
						case "quality":
							expect(key).to.be.a("string");
							break;
						case "username":
							expect(key).to.be.a("string");
							break;
						case "name":
							expect(key).to.be.a("string");
							break;
						case "arryOfValues":
							// should never be expected to run
							expect(key).to.be.a("asdfjkl;");
							break;
						case "test":
							// should never be expected to run
							expect(key).to.be.a("asdfjkl;");
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