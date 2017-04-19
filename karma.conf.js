// Karma configuration
// Generated on Sun Apr 16 2017 22:52:57 GMT+0200 (Mitteleuropäische Sommerzeit)
var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['qunit'],
    files: [
      '.tmp/**/*.specs.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    browsers: ['Chrome'],
  })
}
