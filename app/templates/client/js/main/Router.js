'use strict';

var Router = require('ampersand-router');
var log = require('loglevel');
var React = require('react');
var View = require('./HelloView');

var AppRouter = Router.extend({
  //
  // App Router
  //
  routes: {
    '': 'index'
  },

  index() {
    log.info('main:index');
    React.render(View(), document.getElementById('main'));
  }
});

module.exports = AppRouter;
