// Met à disposition l'ensemble des tâches Gulp
'use strict';

var requireDir = require('require-dir');
var gulp = require('gulp');

// Importe l'ensemble des tâches Gulp configurées individuellement
requireDir('./gulp/tasks', {recurse: true});

// La tâche par défaut à exécuter.
gulp.task('default', [], function(){
  console.log('================================== HELLO !!!');
});