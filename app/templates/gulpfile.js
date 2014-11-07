'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var buffer = require('vinyl-buffer');
var argv = require('yargs').argv;
// sass
var sass = require('gulp-sass');
// sourcemaps
var sourcemaps = require('gulp-sourcemaps');
// livereload
var livereload = require('gulp-livereload');
// js
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// image optimization
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
// connect server
<% if (includeStaticServer) { %>
var connect = require('gulp-connect');
var pushState = require('grunt-connect-pushstate/lib/utils').pushState;
var cookies = require('cookies');
<% } %>

// gulp build --production
var production = !!argv.production;
// determine if we're doing a build
// and if so, bypass the livereload
var build = argv._.length ? argv._[0] === 'build' : false;
var watch = argv._.length ? argv._[0] === 'watch' : true;

// --------------------------
// CUSTOM TASK METHODS
// --------------------------
var tasks = {
  // --------------------------
  // Copy static assets
  // --------------------------
  assets: function() {
    return gulp.src('./client/assets/**/*')
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
      }))
      .pipe(gulp.dest('<%= buildDest %>assets/'));
  },
  // html templates (when using the connect server)
  templates: function() {
    gulp.src('templates/*.html')
      .pipe(gulp.dest('<%= buildDest %>'));
  },
  // --------------------------
  // SASS (dev)
  // --------------------------
  sass: function() {
    return gulp.src('./client/scss/*.scss')
      // sourcemaps init
      .pipe(gulpif(!production, sourcemaps.init()))
      .pipe(sass({
        sourceComments: !production,
        outputStyle: production ? 'compressed' : 'nested'
      }))
      .on('error', function(err) {
        gutil.beep();
        gutil.log(err)
      })
      // write sourcemaps to a specific directory
      .pipe(gulpif(!production, sourcemaps.write('./')))
      // give it a file and save
      .pipe(gulp.dest('<%= buildDest %>css'));
  },
  // --------------------------
  // Browserify (dev)
  // --------------------------
  browserify: function() {
    var bundler = browserify('./client/js/index.js', {
      debug: !production,
      cache: {}
    });
    // determine if we're doing a build
    // and if so, bypass the livereload
    var build = argv._.length ? argv._[0] === 'build' : false;
    if (watch) {
      bundler = watchify(bundler);
    }
    var rebundle = function() {
      return bundler.bundle()
        .on('error', function(err) {
          gutil.beep();
          gutil.log('Browserify Error:', err);
        })
        .pipe(source('build.js'))
        .pipe(gulpif(production, buffer()))
        .pipe(gulpif(production, uglify()))
        .pipe(gulp.dest('<%= buildDest %>js/'))
        .pipe(gulpif(!production && !build, livereload()));
    }
    bundler.on('update', rebundle);
    return rebundle();
  }
}

// --------------------------
// CUSTOMS TASKS
// --------------------------
gulp.task('clean', function(cb) {
  return del(['<%= buildDest %>'], cb);
});
// for production we require the clean method on every individual task
var req = build ? ['clean'] : [];
// individual tasks
gulp.task('templates', req, tasks.templates);
gulp.task('assets', req, tasks.assets);
gulp.task('sass', req, tasks.sass);
gulp.task('browserify', req, tasks.browserify);

// --------------------------
// DEV/WATCH TASK
// --------------------------
gulp.task('watch', ['assets', 'sass', 'browserify'], function() {

// Connect server OR livereload
<% if (includeStaticServer) { %>
  // create live reload server
  connect.server({
    'root': '<%= buildDest %>',
    'port': process.env.PORT || 8000,
    middleware: function(connect) {
      return [
        // setup the config settings in a cookie
        cookies.express(),
        function (req, res, next) {
          next();
        },
        // enable pushState support
        // every url will load the root (index.html)
        pushState(),
        connect.static('<%= buildDest %>')
      ];
    }
  });
<% } %>
  // no connect server, use livereload
  livereload.listen(35729, function(err){
    gutil.log(gutil.colors.bgGreen('... Listening on 35729...'));
    if (err) {
      return console.log(err);
    }
  });

  // watch CSS and reload with  livereload
  // livereload
  gulp.watch('<%= buildDest %>css/**/*.css').on('change', function(event) {
    gutil.log(gutil.colors.bgBlue('Reloading css...'));
      livereload.changed(event.path);
  });

  // watch the sources and rebuild
  gulp.watch('./client/scss/**/*.scss', ['sass']);

  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

// build task
gulp.task('build', [
  'clean',
  'templates',
  'assets',
  'sass',
  'browserify'
]);

gulp.task('default', ['watch']);
