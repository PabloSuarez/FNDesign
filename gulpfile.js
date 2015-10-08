'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

let url = './assets/sass/**/*.scss'
gulp.task('sass', function () {
  gulp.src(url)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(url, ['sass']);
});

gulp.task('default', ['sass:watch'])
