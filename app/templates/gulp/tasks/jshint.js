// linting
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

// --------------------------
// linting
// --------------------------
//TODO config
gulp.task('jshint', function() {
    return gulp.src([
        'gulpfile.js',
        './client/js/index.js',
        './client/js/**/*.js'
      ]).pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .on('error', function() {
        beep();
      });
});
