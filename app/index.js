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
        {'value': 'tp', 'name': 'Third Party Server (apache, nginx, django runserver, etc...)'},
      ]
    }, {
      type: 'input',
      name: 'serverAddress',
      message: 'What address/port is your server running at?',
      default: 'localhost:8000',
      when: function (props) {
        return props.server === 'tp';
      }
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
      this.serverAddress = answers.serverAddress ? answers.serverAddress : 'localhost:8000';
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
    this.template('_gulp.config.js', 'gulp/config.js');
    if (this.browserSyncMode === 'server') {
      this.template('templates/_index.html', 'templates/index.html');
    }
    this.src.copy('gulpfile.js', 'gulpfile.js');
    this.src.copy('Makefile', 'Makefile');
  },
  install: function() {
    this.npmInstall();
  }
});
