'use strict';

let webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    // --- Configuration Karma "standard"
    basePath: '.',
    autoWatch: true,
    browsers: [
      // 'Chrome',
      'PhantomJS'
    ],
    frameworks: [
      'jasmine'
    ],
    logLevel: config.LOG_DEBUG,

    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
    ],

    // --- Configuration karma-webpack

    // Les fichiers à utiliser comme point d'entrée de webpack pour les tests :
    // uniquement les fichiers de tests => les fichiers sources sont construits
    // à partir des imports.
    files: [
      './test/**/*.specs.js'
    ],

    // Les fichiers sont préprocessés avec webpack pour résoudre les dépendances
    preprocessors: {
      './src/**/*.js': ['webpack'],
      './test/**/*.specs.js': ['webpack']
    },

    webpack: webpackConfig,
  });
};