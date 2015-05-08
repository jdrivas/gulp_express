var gulp = require('gulp');
var gls = require('gulp-live-server');

var debug =  process.env.GULP_DEBUG ? true : false;
debug = true;
var log_debug = function(mesg) {if(debug) {console.log(mesg)}}

var app = "app.js";
var static_content = ["./**/*.jade", "./**/*.css"];

gulp.task('serve', function() {

	var server = gls.new('bin/www');
	server.start();

	gulp.watch(app, function(event) {
		log_debug("restarting server for: " + event);
		server.start();
		server.notify(event);
	});

	gulp.watch(static_content, function(event) {
		log_debug("reloading server for:" + event);
		server.notify(event);
	});

});

gulp.task('default', ['serve']);