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


  // // --------------------------
  // // Copy static assets
  // // --------------------------
  // // --------------------------
  // // Optimize asset images
  // // --------------------------
  // optimize: function() {
  //   return gulp.src('./client/assets/**/*.{gif,jpg,png,svg}')
  //     .pipe(imagemin({
  //       progressive: true,
  //       svgoPlugins: [{removeViewBox: false}],
  //       // png optimization
  //       optimizationLevel: production ? 3 : 1
  //     }))
  //     .pipe(gulp.dest('./client/assets/'));
  // },
  // assets: function() {
  //   return gulp.src('./client/assets/**/*')
  //     .pipe(gulp.dest('<%= buildDest %>assets/'));
  // },
