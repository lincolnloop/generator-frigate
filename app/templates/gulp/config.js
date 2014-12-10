var dest = "./build";
var src = './client';

module.exports = {

  clientDir: src,

  browserSync: {
    server: {
        baseDir: dest
    },
    files: [
      dest + "/**",
      // Exclude Map files
      "!" + dest + "/**.map"
    ],
    port: process.env.PORT || 3000

    /*
    // DEBUG output options
    logFileChanges: true,
    logLevel: "debug"
    */
  },

  sass: {
    src: src + "/scss/*.{sass,scss}",
    dest: dest + "/css",
    settings: {
      // Required if you want to use SASS syntax
      // See https://github.com/dlmanning/gulp-sass/issues/81
      sourceComments: 'map',
      //TODO fix path
      imagePath: '/images' // Used by the image-url helper
    }
  },

  assets: {
    src: "./client/assets/**/*.{gif,jpg,png,svg}",
    dest: dest,
    imagemin: {
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      // png optimization
      optimizationLevel: 1
    }
  },

  templates: {
    // *Note* templates don't use the common src
    src: "./templates/**",
    dest: dest
  },

  browserify: {
    // Enable source maps
    debug: true,

    // Additional file extentions to make optional
    //extensions: ['.coffee', '.hbs'],
    extensions: [],

    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: src + '/js/index.js',
      dest: dest + '/js',
      outputName: 'app.js'
    }]
  },

  jshint: {
    src: [
      'gulpfile.js',
      './client/js/index.js',
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
