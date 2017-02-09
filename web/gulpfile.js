// Met à disposition l'ensemble des tâches Gulp
'use strict';

var requireDir = require('require-dir');

// Importe l'ensemble des tâches Gulp configurées individuellement
requireDir('./gulp/tasks', {recurse: true});