var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('scss/**/recess.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('watch', function () {
  gulp.watch('scss/**/recess.scss', ['styles']);
});

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'Recess-icons';
var runTimestamp = Math.round(Date.now() / 1000);

gulp.task('Iconfont', function () {
  return gulp.src(['assets/*.svg'])
    /**
    .pipe(iconfontCss({
      fontName: fontName,
      path: './scss/fonts.scss',
      targetPath: './css/fonts.css',
      fontPath: './fonts/'
    }))
     */
    .pipe(iconfont({
      fontName: fontName,
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff'],
      timestamp: runTimestamp
    }))
    .on('glyphs', function (glyphs, options) {
      console.log(glyphs, options);
    })
    .pipe(gulp.dest('fonts/'));
});