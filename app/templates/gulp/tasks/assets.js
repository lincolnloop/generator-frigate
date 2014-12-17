var cached    = require('gulp-cached');
var gulp       = require('gulp');
var gulpIf     = require('gulp-if');
var imagemin   = require('gulp-imagemin');
var config     = require('../config').assets;
var gutil      = require('gulp-util');

gulp.task('assets', function() {

  // Don't process images in build mode.
  gutil.log('build flag: ', global.isBuilding);

  return gulp.src(config.src)
    .pipe(cached('assets')) // Ignore unchanged files
    .pipe(gulpIf(!global.isBuilding, imagemin(config.imageminOptions))) // Optimize
    .pipe(gulp.dest(config.dest));
});
