var generators = require('yeoman-generator');
var chalk = require('chalk');

module.exports = generators.Base.extend({
  app: function() {
    this.log(chalk.green(
      "Generating your Hologram styleguide"
    ));
    this.directory('styleguide');
    this.src.copy('Gemfile', 'Gemfile');
    this.src.copy('Gemfile.lock', 'Gemfile.lock');
    this.src.copy('hologram_config.yml', 'hologram_config.yml');
  }
});
