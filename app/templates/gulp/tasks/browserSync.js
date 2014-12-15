var _ = require('lodash');
var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config');

var bsConfig = config.browserSync.all;
if (config.browserSyncDebug){
    _.assign(bsConfig, config.browserSync.debug);
}
var mode = config.browserSyncMode + "Options";
_.assign(bsConfig, config.browserSync[mode]);


gulp.task('browserSync', function() {
  browserSync(bsConfig);
});
