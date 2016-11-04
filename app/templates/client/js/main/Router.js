'use strict';

var Router = require('ampersand-router');
var log = require('loglevel');
var React = require('react');
var ReactDOM = require('react-dom');
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
    ReactDOM.render(React.createElement(HelloView, {}), document.getElementById('main'));
  }
});

module.exports = AppRouter;
