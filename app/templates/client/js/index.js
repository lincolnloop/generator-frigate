"use strict";

var app = require('./app');
var log = require('loglevel');

// Log level setup
// if (config.debug) {
//   log.setLevel('debug');
// }

//
// Single Page Apps only:
// jQuery override of the click event so all links use pushState
//
//  $(document).on('click', 'a[href]', function (event) {
//    var url = $(event.currentTarget).attr('href');
//    if (url.indexOf('http') !== 0) {
//      app.history.navigate(url, {'trigger': true});
//      event.preventDefault();
//    }
//  });

// initialize all routers here:
// new <AppName>Router();

// start history so routers are matched
app.history.start({
  'pushState': true
});