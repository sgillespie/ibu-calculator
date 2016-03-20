const webpackConfig = require('./webpack.test');

module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    autoWatch: true,
    basePath: '',
    browsers: ['PhantomJS'],
    colors: true,
    concurrency: Infinity,
    exclude: [],

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['spec'],
    singleRun: false,

    files: [
      'test/tests.js'
    ],

    preprocessors: {
      'test/tests.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    plugins: [
      'karma-firefox-launcher',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-spec-reporter',
      'karma-webpack'
    ]
  });
};
