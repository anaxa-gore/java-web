/**
 * Created by A4811584 on 15/02/2017.
 */
const gulp = require('gulp');
const Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('tests', function (done) {
  new Server({
    configFile: __dirname + '/../karma.conf.js',
    singleRun: true
  }, done).start();
});