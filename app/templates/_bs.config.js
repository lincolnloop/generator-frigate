var dest = "build";
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
    "build/**",
    // Exclude Map files
    "!build/**.map"
  ],
  server: {
    baseDir: dest,
    index: "index.html"
  }
};