/**
 * Created by A4811584 on 03/03/2017.
 */
let baseConfig = require('./karma.conf');

module.exports = (config) => {
  baseConfig(config);

  config.set({
    singleRun: true,
    colors: false,
    autoWatch: false,
    reporters: ['progress', 'junit', 'coverage'],
    preprocessors: {
      './src/**/*.js': ['webpack', 'coverage'],
      './test/**/*.specs.js': ['webpack']
    },
    browsers: ['PhantomJS'],
    junitReporter: {
      outputFile: '../reports/junit/TESTS-xunit.xml'
    },
    coverageReporter: {
      type: 'lcov',
      dir: 'reports',
      subdir: 'coverage'
    }
  });
};