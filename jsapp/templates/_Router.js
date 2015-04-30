'use strict';

var Router = require('ampersand-router');
var log = require('loglevel');
var React = require('react');
var HelloView = require('./HelloView');

var AppRouter = Router.extend({
  //
  // App Router
  //
  routes: {
    '<%= appPath %>/': 'index'
  },

  index() {
    log.info('<%= appPath %>:index');
    React.render(React.createElement(HelloView), document.getElementById('main'));
  }
});

module.exports = AppRouter;
