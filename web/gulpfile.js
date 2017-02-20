// Met à disposition l'ensemble des tâches Gulp
'use strict';

let requireDir = require('require-dir');
let gulp = require('gulp');

// Importe l'ensemble des tâches Gulp configurées individuellement
requireDir('./gulp', {recurse: true});

// Paramétrer les tâches à réaliser pour construire l'application dans chacun des
// environnement => Par ex. pas de minification du code en dev mais minification
// en test et prod !
let tasksDev = ['test_unit'];
let tasksTest = [];
let tasksProd = [];

gulp.task('dev', tasksDev, function () {
  console.log('================================== HELLO DEV !!!');
});

gulp.task('test', tasksTest, function () {
  console.log('================================== HELLO TEST !!!');
});

gulp.task('prod', tasksProd, function () {
  console.log('================================== HELLO PROD !!!');
});