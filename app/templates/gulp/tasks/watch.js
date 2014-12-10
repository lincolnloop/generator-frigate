/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp');
var config= require('../config');

gulp.task('watch', ['setWatch', 'build', 'browserSync'], function() {
    gulp.watch(config.sass.src,   ['sass']);
    gulp.watch(config.assets.src, ['assets']);
    gulp.watch(config.templates.src, ['templates']);
    gulp.watch(config.clientDir + '/js/**', ['jshint', 'test']);
});

