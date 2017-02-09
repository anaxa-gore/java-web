// Configure le lancement d'un serveur HTTP
'use strict';

var gulp = require('gulp');
var bs = require('browser-sync').create();

/**
 * Démarre browser-sync.
 * @param baseDir Le répertoire racine à servir en HTTP.
 * @param files   Les fichiers à surveiller pour rafraîchir la page WEB.
 */
function startBrowserSync(baseDir, files) {
  bs.instance = bs.init(
      files,
      {
        startPath: '/',
        server: {
          baseDir: baseDir
        }
      });
}

gulp.task('server', function () {
  startBrowserSync('./', ['index.html'])
});