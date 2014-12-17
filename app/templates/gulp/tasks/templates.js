var gulp = require('gulp');
var cached = require('gulp-cached');
var config = require('../config').templates;
var gutil = require('gulp-util');

gulp.task('templates', function() {
  return gulp.src(config.src)
    .pipe(cached('templates'))
    .pipe(gulp.dest(config.dest));
});
