var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({
  promptTask: function() {
    var done = this.async();

    // welcome message
    if (!this.options['skip-welcome-message']) {
      this.log(chalk.magenta(
        'Out of the box I include libsass, browserify and livereload ' +
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
      type: 'confirm',
      name: 'connect',
      value: 'includeStaticServer',
      message: 'Would you like to use connect as a basic server?',
      default: false
    }, {
      type: 'confirm',
      name: 'notifications',
      value: 'systemNotifications',
      message: 'Do you want to enable system notifications on errors?',
      default: true
    }, {
      type    : 'input',
      name    : 'buildDest',
      message : 'What is your build destination directory?',
      default : 'build/'
    }], function (answers) {
      this.github = answers.github;
      this.includeStaticServer = answers.connect;
      this.systemNotifications = answers.notifications;
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
    this.template('gulpfile.js', 'gulpfile.js');
    this.template('templates/index.html', 'templates/index.html');
    this.src.copy('Gemfile', 'Gemfile');
    this.src.copy('Gemfile.lock', 'Gemfile.lock');
    this.src.copy('hologram_config.yml', 'hologram_config.yml');
  },
  install: function() {
    this.npmInstall();
  }
});
