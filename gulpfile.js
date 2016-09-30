/* eslint-env node */
/* eslint strict: ["error", "global"] */
'use strict';
var eslint = require('gulp-eslint'),
    excludeGitignore = require('gulp-exclude-gitignore'),
    gulp = require('gulp'),
    nsp = require('gulp-nsp'),
    path = require('path');

gulp.task('eslint', function() {
    return gulp.src([
        '**/*.js',
        '!app/templates/gulpfile.js',
        '!app/templates/src/scripts/settings/call_plugins.js'
    ])
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function(cb) {
    return nsp({package: path.resolve('package.json')}, cb);
});

gulp.task('test', ['nsp', 'eslint']);
