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
    filename: 'js/bundle.js'
  },
  // enzyme testing requirements
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
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
