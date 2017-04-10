'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the ' + chalk.red('ES7 Express') + ' generator!'
    ));

    var prompts = [
      {
        type: 'list',
        name: 'projectType',
        message: 'Are you creating a module or an API?',
        choices: [
          'Module',
          'API'
        ],
        default: 0,
        store: true
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What would you like to name this project?',
        default: 'my-project',
        store: true
      },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'What is the description of the project?',
        default: 'My Project Description',
        store: true
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      done();
    }.bind(this));
  },

  writing: function () {
    // this.destinationRoot(this.props.projectName);
    var __type = 'module';
    if (this.props.projectType === 'API') {
      __type = 'api';
    }
    this.fs.copyTpl(
      this.templatePath(__type + '/**/*.*'),
      this.destinationPath(),
      {
        projectName: this.props.projectName,
        projectDescription: this.props.projectDescription,
        dependencies: this.props.dependencies
      }
    );
    // Yeoman has issues copying dot files
    this.fs.copy(
      this.templatePath(__type + '/_babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath(__type + '/_eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath(__type + '/_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath(__type + '/_npmignore'),
      this.destinationPath('.npmignore')
    );
  },

  install: function () {
    this.npmInstall();
  }
});
