// Met à disposition l'ensemble des tâches Gulp
'use strict';

var requireDir = require('require-dir');
var gulp = require('gulp');

// Importe l'ensemble des tâches Gulp configurées individuellement
requireDir('./gulp/tasks', {recurse: true});

// Paramétrer les tâches à réaliser pour construire l'application dans chacun des
// environnement => Par ex. pas de minification du code en dev mais minification
// en test et prod !
var tasksDev = [];
var tasksTest = [];
var tasksProd = [];

gulp.task('dev', tasksDev, function () {
  console.log('================================== HELLO DEV !!!');
});

gulp.task('test', tasksTest, function () {
  console.log('================================== HELLO TEST !!!');
});

gulp.task('prod', tasksProd, function () {
  console.log('================================== HELLO PROD !!!');
});