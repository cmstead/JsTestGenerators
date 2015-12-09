'use strict';
var yeoman = require('yeoman-generator');

function buildDependencyLoaders (dependencies) {
  return dependencies.split(' ')
                     .map(function (value) { return value.trim(); })
                     .filter(function (value) { return value !== ''; })
                     .map(function (value) { return '        module(\'' + value + '\');'; })
                     .join('\n');
}

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    var prompts = [
      {
        type: 'input',
        name: 'moduleName',
        message: "Name of module under test"
      },
      {
        type: 'input',
        name: 'controllerName',
        message: "Name of controller under test"
      },
      {
        type: 'input',
        name: 'functionName',
        message: "Name of function under test"
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'Provide a list of module dependencies separated by a space (e.g. foo bar baz)'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: function (basePath) {
    var path = [this.props.moduleName, this.props.functionName],
        context = {
          moduleName: this.props.moduleName,
          controllerName: this.props.controllerName,
          functionName: this.props.functionName,
          dependencies: buildDependencyLoaders(this.props.dependencies)
        };

    if (Boolean(basePath)) {
        path.unshift(basePath);
    }

    this.fs.copyTpl(
      this.templatePath('template.spec.js'),
      this.destinationPath(path.join('/') + '.spec.js'),
      context
    );
  }
});
