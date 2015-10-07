var argv = require('yargs').argv;
var production = !!argv.production;
<% if (browserSyncPushState) { %>var historyApiFallback = !production ? require('connect-history-api-fallback') : null;<% } %>
var dest = "build";
var src = "client";

var sassSource = src + "/scss/**/*.{sass,scss}";
var sassDestination = dest + "/css";
var imagesSource = src + "/assets/img/**/*.{gif,jpg,jpeg,tiff,png,svg}";
var imagesDestination = src + "/assets/img";

module.exports = {

  clientDir: src,

  assets: {
    processImages: /\.(gif|jpg|jpeg|tiff|png)$/i,
    imageminOptions: {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      // png optimization
      optimizationLevel: 1
    },
    imgSrc: imagesSource,
    imgDest: imagesDestination
  },

  browserify: {
    // Additional file extentions to make optional
    //extensions: ['.coffee', '.hbs'],
    extensions: [],

    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './' + src + '/js/app.js',
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  },

  jshint: {
    src: [
      'gulpfile.js',
      './client/js/app.js',
      './client/js/**/*.js'
    ]
  },

  test: {
    src: './client/**/*test.js',
    mochaOptions: {
      'ui': 'bdd',
      'reporter': 'spec'
    }
  }
};
