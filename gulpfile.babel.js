import gulp from 'gulp';
import concat from 'gulp-concat';
import react from 'gulp-react';
import babel from 'gulp-babel';

const outputDest   = './dist/';
const jsxSource    = './assets/jsx/**/*.jsx';
const publicSource = './public/**/*';

gulp.task('jsx', () => {
  gulp.src(jsxSource)
    .pipe(react())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulp.dest(outputDest));
});

gulp.task('public', () => {
  gulp.src(publicSource)
    .pipe(gulp.dest(outputDest));
});

gulp.task('default', ['public', 'jsx'], () => {
  gulp.watch(jsxSource, ['jsx']);
  gulp.watch(publicSource, ['public']);
});
