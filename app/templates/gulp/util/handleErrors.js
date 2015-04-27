var notify = require("gulp-notify");
var gutil = require("gulp-util");

module.exports = function() {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  beep();
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};
