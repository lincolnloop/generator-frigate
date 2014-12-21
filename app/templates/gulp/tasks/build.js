var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'assets', 'templates'], function(){
    global.isBuilding = false;
});
