'use strict';

var React = require('react');
var log = require('loglevel');

var HelloView = React.createClass({
  // es6 style method
  render() {
    return (
      <h1>Hello World with React</h1>
    );
  }
});

module.exports = HelloView;