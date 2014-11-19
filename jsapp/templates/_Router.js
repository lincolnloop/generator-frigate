'use strict';

var Router = require('ampersand-router');
var log = require('loglevel');
var View = require('HelloView');

var AppRouter = Router.extend({
  //
  // App Router
  //
  routes: {
    '/<%= appPath %>/': 'index'
  },

  index: function() {
    log.info('<%= appPath %>:index');
  }
});

module.exports = AppRouter;