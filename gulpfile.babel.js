import gulp from 'gulp';
import concat from 'gulp-concat';
import react from 'gulp-react';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';

const outputDest   = './dist/';
const jsxSource    = './assets/jsx/**/*.jsx';
const jsSource     = './assets/js/**/*.js'
const publicSource = './public/**/*';
const cssSource    = './assets/css/**/*.scss'

gulp.task('sass', () => {
  gulp.src(cssSource)
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(concat('app.css'))
    .pipe(gulp.dest(outputDest));
});

gulp.task('js', () => {
  gulp.src([jsxSource, jsSource])
    .pipe(sourcemaps.init())
    .pipe(react())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest(outputDest));
});

gulp.task('public', () => {
  gulp.src(publicSource)
    .pipe(gulp.dest(outputDest));
});

gulp.task('default', ['public', 'js', 'sass'], () => {
  gulp.watch([jsxSource, jsSource], ['js']);
  gulp.watch(publicSource, ['public']);
  gulp.watch(cssSource, ['sass']);
});
