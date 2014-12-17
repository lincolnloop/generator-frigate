var gulp = require('gulp');
var cached = require('gulp-cached');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var config = require('../config').jshint;

gulp.task('jshint', function() {
    return gulp.src(config.src)
        .pipe(cached('jshint'))
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .on('error', function() {
            beep();
        });
});
