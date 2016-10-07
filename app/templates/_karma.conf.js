var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');
webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/, exclude: /(node_modules)/,
    loader: 'babel-loader'
  }
];

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'client/test/index.js'
    ],
    plugins: [
      webpack,
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],
    browsers: ['PhantomJS'],
    preprocessors: {
      'client/test/index.js': ['webpack']
    },
    reporters: ['spec'],
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};
