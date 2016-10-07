'use strict';

var Router = require('ampersand-router');
var log = require('loglevel');
var React = require('react');
var HelloView = require('./HelloView.jsx');

var AppRouter = Router.extend({
  //
  // App Router
  //
  routes: {
    '': 'index'
  },

  index() {
    log.info('main:index');
    React.render(React.createElement(HelloView), document.getElementById('main'));
  }
});

module.exports = AppRouter;
