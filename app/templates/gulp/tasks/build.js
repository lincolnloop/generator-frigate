var gulp = require('gulp');

gulp.task('build', ['browserify'], function(){
    global.isBuilding = false;
});
