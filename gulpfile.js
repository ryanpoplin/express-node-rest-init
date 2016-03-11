"use strict";

// get our modules for gulp usage
const gulp = require("gulp"),
	  concat = require("gulp-concat"),
	  uglify = require("gulp-uglify"),
	  rename = require("gulp-rename");

// gulp tasks

// TODO: get this to work with all my files on the API
gulp.task("js", function() { // get our JS files task
	// gulp.src(can take an array of file paths)
	// ** && * in the file path???
	// just testing, this is not useful for server side code, this is because these files are not being downloaded over the network, so the performance gains to the v8 engine are very minimal compared to sending and reading minified, uglified, and concatenated files over the network to clients
	gulp.src(["./server.js", "./app/**/*.js", "./config/*.js", "./config/env/development.js"]) // source
	.pipe(concat("scripts.js")) // stream them to concat plugin
	.pipe(gulp.dest("./build/")) // dir
	.pipe(rename({suffix: ".min"})) // suffix
	.pipe(uglify()) // stream them to uglify plugin
	.pipe(gulp.dest("./build/")); // dir
});

gulp.task("watchers", function() { // watch JS files task
	gulp.watch("src/**/*.js", ["js"]); // watch this file for changes
});

gulp.task("default", ["js", "watchers"]); // let gulp know which tasks to run