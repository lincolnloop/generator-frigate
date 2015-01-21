var cached    = require('gulp-cached');
var gulp       = require('gulp');
var gulpIf     = require('gulp-if');
var imagemin   = require('gulp-imagemin');
var config     = require('../config').assets;
var gutil      = require('gulp-util');

gulp.task('assets', function() {
  return gulp.src(config.src)
    .pipe(cached('assets')) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});
