var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'assets', 'templates']);

/*
// build task
gulp.task('build', [
  'clean',
  'templates',
  'assets',
  'sass',
  'browserify'
]);
*/