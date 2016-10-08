// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
var webpack = require('webpack');
var path = require('path');
var isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  debug: false,
  devtool: isProduction ? null : '#eval-source-map',
  entry: [
    './client/js/app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        include: path.join(__dirname, 'client')
      }
    ]
  },
  node: {
    fs: "empty"
  }
};
