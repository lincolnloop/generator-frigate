var cached    = require('gulp-cached');
var gulp       = require('gulp');
var gulpIf     = require('gulp-if');
var imagemin   = require('gulp-imagemin');
var config     = require('../config').assets;

gulp.task('assets', function() {
  return gulp.src(config.src)
    .pipe(cached('assets')) // Ignore unchanged files
    .pipe(gulpIf(config.processImages,imagemin(config.imageminOptions))) // Optimize
    .pipe(gulp.dest(config.dest));
});
