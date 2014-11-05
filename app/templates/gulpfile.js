'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
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


// --------------------------
// Copy static assets
// --------------------------
// html templates (when using the connect server)
gulp.task('assets', function() {
  gulp.src('templates/*.html')
    .pipe(gulp.dest(<%= buildDest %>));
});

// --------------------------
// SASS (dev)
// --------------------------
gulp.task('sass', function() {
  return gulp.src('./client/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    // error logging
    .on('error', gutil.log)
    // write sourcemaps to a specific directory
    .pipe(sourcemaps.write('./'))
    // give it a file and save
    .pipe(gulp.dest('<%= buildDest %>css'));
});

// --------------------------
// Browserify (dev)
// --------------------------
gulp.task('browserify', function() {
  var bundler = watchify(browserify('./client/js/index.js', watchify.args));
  var rebundle = function() {
    return bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source('build.js'))
      .pipe(gulp.dest('<%= buildDest %>js/')).pipe(livereload());
  }
  bundler.on('update', rebundle);
  return rebundle();
});

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
