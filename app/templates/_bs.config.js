var webpack = require('webpack');
var webpackConfig = require('./webpack.config');
var bundler = webpack(webpackConfig);
<% if (browserSyncPushState) { %>var historyApiFallback = require('connect-history-api-fallback');<% } %>

module.exports = {
  server: <% if (browserSyncMode === 'server') { %>true<% } else { %>false<% } %>,
  proxy: <% if (browserSyncMode === 'proxy') { %><%= serverAddress %><% } else { %>false<% } %>,
  port: process.env.PORT || 3000,
  <% if (browserSyncPushState) { %>middleware: [historyApiFallback],<% } %>
  open: false,
  logFileChanges: true,
  logLevel: "info",
  files: [
    'build/css/*.css',
    'templates/*.html',
    // Exclude Map files
    "!build/**.map"
  ],
  server: {
    baseDir: ["build"<% if (browserSyncMode === "server") { %>, "templates"<% } %>],
    index: "index.html",
    middleware: [
      require('webpack-dev-middleware')(bundler, {
        // IMPORTANT: dev middleware can't access config, so we should
        // provide publicPath by ourselves
        publicPath: webpackConfig.output.publicPath,

        // pretty colored output
        stats: { colors: true }

        // for other settings see
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),

      // bundler should be the same as above
      require('webpack-hot-middleware')(bundler)
    ]
  }
};
