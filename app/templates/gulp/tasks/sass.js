var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').sass;
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});



  // // --------------------------
  // // SASS (libsass)
  // // --------------------------
  // sass: function() {
  //   return gulp.src('./client/scss/*.scss')
  //     // sourcemaps + sass + error handling
  //     .pipe(gulpif(!production, sourcemaps.init()))
  //     .pipe(sass({
  //       sourceComments: !production,
  //       outputStyle: production ? 'compressed' : 'nested'
  //     }))
  //     .on('error', handleError)
  //     // generate .maps
  //     .pipe(gulpif(!production, sourcemaps.write({
  //       'includeContent': false,
  //       'sourceRoot': '.'
  //     })))
  //     // autoprefixer
  //     .pipe(gulpif(!production, sourcemaps.init({
  //       'loadMaps': true
  //     })))
  //     .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
  //     // we don't serve the source files
  //     // so include scss content inside the sourcemaps
  //     .pipe(sourcemaps.write({
  //       'includeContent': true
  //     }))
  //     // write sourcemaps to a specific directory
  //     // give it a file and save
  //     .pipe(gulp.dest('<%= buildDest %>css'));
  // },
