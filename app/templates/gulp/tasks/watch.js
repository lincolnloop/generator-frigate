/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp  = require('gulp');
var config= require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.sass.src,   ['sass']);
//  gulp.watch(config.images.src, ['images']);
    gulp.watch(config.templates.src, ['templates']);
});


// // --------------------------
// // DEV/WATCH TASK
// // --------------------------
// gulp.task('watch', ['assets', 'templates', 'sass', 'browserify', 'browser-sync'], function() {

//   // --------------------------
//   // watch:sass
//   // --------------------------
//   gulp.watch('./client/scss/**/*.scss', ['reload-sass']);

//   // --------------------------
//   // watch:js
//   // --------------------------
//   //gulp.watch('./client/js/**/*.js', ['lint:js', 'reload-js']);

//   // --------------------------
//   // watch:html
//   // --------------------------
//   gulp.watch('./templates/**/*.html', ['reload-templates']);

//   gutil.log(gutil.colors.bgGreen('Watching for changes...'));
// });
