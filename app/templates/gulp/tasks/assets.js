var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');
var config     = require('../config').assets;

gulp.task('assets', function() {
  return gulp.src(config.src)
  //TODO missing assets/css
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin(config.imageminOptions)) // Optimize
    .pipe(gulp.dest(config.dest));
});
