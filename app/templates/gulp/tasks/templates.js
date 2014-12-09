var gulp = require('gulp');
var config = require('../config').templates;
var gutil = require('gulp-util');

gulp.task('templates', function() {
    gutil.log('templates task');
    gutil.log(config.src, config.dest);
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
