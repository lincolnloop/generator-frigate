var exec = require('child_process').exec;

module.exports = function() {
  var os = require('os');
  var file = 'error.wav';
  if (os.platform() === 'linux') {
    // linux
    exec("aplay " + file);
  } else {
    // mac
    console.log("afplay " + file);
    exec("afplay " + file);
  }
};
