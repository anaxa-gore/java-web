/**
 * Created by A4811584 on 15/02/2017.
 */
const gulp = require('gulp');
const Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('tests', function (done) {
  // TODO TBA : vider le dossier de reports

  new Server({
    configFile: __dirname + '/../test/karma.ci.conf.js',
    singleRun: true
  }, done).start();
});