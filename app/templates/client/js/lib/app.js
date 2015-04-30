'use strict';

var Router = require('ampersand-router');

var App = Router.extend({
  //
  // Main App module.
  // Extends Ampersand Router to provide app-wide access to the history API
  // - app.history.navigate('/users/', {'trigger': true});
  //
});

module.exports = new App();
