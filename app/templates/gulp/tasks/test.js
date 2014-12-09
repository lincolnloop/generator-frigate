var gulp = require('gulp');
var mocha = require('gulp-mocha');

// --------------------------
// Testing with mocha
// --------------------------

gulp.task('test', function() {
    return gulp.src('./client/**/*test.js', {read: false})
        //TODO config
      .pipe(mocha({
        'ui': 'bdd',
        'reporter': 'spec'
      })
    );
});
