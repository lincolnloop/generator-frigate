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
      type    : 'input',
      name    : 'buildDest',
      message : 'What is your build destination directory?',
      default : 'build/'
    }], function (answers) {
      this.github = answers.github;
      this.includeStaticServer = answers.connect;
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
    this.template('gulpfile.js', 'gulpfile.js');
    this.directory('client');
    this.template('templates/index.html', 'templates/index.html');
  },
  install: function() {
    this.npmInstall();
  }
});
