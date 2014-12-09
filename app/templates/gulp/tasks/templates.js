var gulp = require('gulp');
var config = require('../config').templates;
var gutil = require('gulp-util');

gulp.task('templates', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
