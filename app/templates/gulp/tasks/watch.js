/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp');
var config= require('../config');
var startBrowserSync = require('../util/startBrowserSync');

gulp.task('watch', ['build'], function() {
  startBrowserSync();
  gulp.watch(config.sass.src,   ['sass']);
  gulp.watch(config.assets.src, ['assets']);
  gulp.watch(config.templates.src, ['templates']);
  gulp.watch(config.clientDir + '/js/**', ['jshint', 'test']);
});

