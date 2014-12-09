var notify = require("gulp-notify");
var beep = require("./beep");

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

/*
var handleError = function(task) {
  return function(err) {
    beep();
    <% if (systemNotifications) { %>
      notify.onError({
        message: task + ' failed, check the logs..',
        sound: false
      })(err);
    <% } %>
    gutil.log(gutil.colors.bgRed(task + ' error:'), gutil.colors.red(err));
  };
};
*/