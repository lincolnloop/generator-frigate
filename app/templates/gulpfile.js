'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var uglify = require('gulp-uglify');
var gulpif = require('gulp-if');
var buffer = require('vinyl-buffer');
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
// connect server
<% if (includeStaticServer) { %>
var connect = require('gulp-connect');
var pushState = require('grunt-connect-pushstate/lib/utils').pushState;
var cookies = require('cookies');
<% } %>

var isProd = process.env.NODE_ENV === 'production';

// --------------------------
// CUSTOM TASK METHODS
// --------------------------
var tasks = {
  // --------------------------
  // Copy static assets
  // --------------------------
  // html templates (when using the connect server)
  assets: function() {
    return gulp.src('templates/*.html')
      .pipe(gulp.dest('<%= buildDest %>'));
  },
  // --------------------------
  // SASS (dev)
  // --------------------------
  sass: function() {
    return gulp.src('./client/scss/*.scss')
      // sourcemaps init
      .pipe(gulpif(!isProd, sourcemaps.init()))
      .pipe(sass({
        sourceComments: !isProd,
        outputStyle: isProd ? 'compressed' : 'nested'
      }))
      .on('error', gutil.log)
      // write sourcemaps to a specific directory
      .pipe(gulpif(!isProd, sourcemaps.write('./')))
      // give it a file and save
      .pipe(gulp.dest('<%= buildDest %>css'));
  },
  // --------------------------
  // Browserify (dev)
  // --------------------------
  browserify: function() {
    var bundler = browserify('./client/js/index.js', {
      debug: !isProd,
      cache: {}
    });
    if (!isProd) {
      bundler = watchify(bundler);
    }
    var rebundle = function() {
      return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('build.js'))
        .pipe(gulp.dest('<%= buildDest %>js/'))
        .pipe(gulpif(!isProd, livereload()));
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
var req = process.env.NODE_ENV === 'production' ? ['clean'] : [];
// individual tasks
gulp.task('assets', req, tasks.assets);
gulp.task('sass', req, tasks.sass);
gulp.task('browserify', req, tasks.browserify);
// deploy
gulp.task('dist', ['clean', 'assets', 'sass', 'browserify']);

// --------------------------
// DEV/WATCH TASK
// --------------------------
gulp.task('watch', ['assets', 'sass', 'browserify'], function() {
  livereload.listen(35729, function(err){
    gutil.log(gutil.colors.bgGreen('... Listening on 35729...'));
    if (err) {
      return console.log(err);
    }
  });

  <% if (includeStaticServer) { %>
  // create live reload server
  connect.server({
    'root': '<%= buildDest %>',
    'port': process.env.PORT || 8000,
    'livereload': true,
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
  // point livereload to connect.reload
  // so we don't have to if-check everything
  livereload = connect.reload;
  <% } %>

  // watch the css files and reload the changed ones
  gulp.watch('<%= buildDest %>css/**/*.css').on('change', function(event) {
    gutil.log(gutil.colors.bgBlue('Reloading css...'));
    <% if (includeStaticServer) { %>
      livereload.changed(event.path);
    <% } else { %>
      connect.reload();
    <% } %>
  });

  // watch the sources and rebuild
  gulp.watch('./client/scss/**/*.scss', ['sass']);

  gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});

// build task
gulp.task('build', [
  'assets',
  'sass'
]);

gulp.task('default', ['watch']);
