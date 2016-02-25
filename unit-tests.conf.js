
// karma config file - project - test AngularJs
module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-phantomjs-launcher'
    ],
    // start these browsers
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    files: [
      // templates
      '../**/*.html'
    ],
    preprocessors: {
      'EM/!(libs)/**/*.js': ['coverage']
    },
    ngHtml2JsPreprocessor: {
      // setting this option will create only a single module that contains templates
      // from all the files, so you can load them all with module('templates')
      moduleName: 'templates'
    },
    coverageReporter: {
      type: 'html',
      dir: 'test/coverage'
    },
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: true,
    singleRun: true
  });
};
