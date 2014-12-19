var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({
  promptTask: function() {
    var done = this.async();

    // welcome message
    if (!this.options['skip-welcome-message']) {
      this.log(chalk.magenta(
        'Out of the box I include libsass, Browserify and BrowserSync ' +
        'to build your app.'
      ));
    }
    this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, {
      type    : 'input',
      name    : 'github',
      message : 'Github repo url',
      default : 'https://github.com/lincolnloop/' + this.appname
    }, {
      type: 'list',
      name: 'server',
      message: 'What type of server would you like to use?',
      choices: [
        {'value': 'bs', 'name': 'BrowserSync Basic Server'},
        {'value': 'bs-ps', 'name': 'BrowserSync Server with pushState support'},
        {'value': 'tp', 'name': 'Third Party Server (default: localhost:8000)'},
      ]
    }, {
      type: 'confirm',
      name: 'notifications',
      message: 'Do you want to enable system notifications on errors?',
      default: true
    }, {
      type    : 'input',
      name    : 'buildDest',
      message : 'What is your build destination directory?',
      default : 'build/'
    }], function (answers) {
      this.github = answers.github;
      this.systemNotifications = answers.notifications;
      this.browserSyncMode = answers.server.substring(0, 2) === 'bs' ? 'server' : 'proxy';
      this.browserSyncPushState = answers.server === 'bs-ps';
      this.buildDest = answers.buildDest;
      done();
    }.bind(this));
  },
  packageJSON: function() {
    this.template('_package.json', 'package.json');
  },
  git: function() {
    this.template('gitignore', '.gitignore');
  },
  app: function() {
    this.directory('client');
    this.directory('gulp');
    this.directory('styleguide');
    this.template('_gulp.config.js', 'gulp/config.js');
    this.template('templates/_index.html', 'templates/index.html');
    this.src.copy('gulpfile.js', 'gulpfile.js');
    this.src.copy('Gemfile', 'Gemfile');
    this.src.copy('Gemfile.lock', 'Gemfile.lock');
    this.src.copy('hologram_config.yml', 'hologram_config.yml');
  },
  install: function() {
    this.npmInstall();
  }
});
