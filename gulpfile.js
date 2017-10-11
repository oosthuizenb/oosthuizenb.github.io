var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var pump = require('pump');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

// Sass to css
gulp.task('sass', function () {
  return gulp.src('src/scss/base.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify cs
gulp.task('minify-css', function () {
  return gulp.src('build/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});

// Concat js
gulp.task('scripts', function() {
  return gulp.src('src/js/**/*.js')
  .pipe(concat('app.js'))
  .pipe(gulp.dest('build/js'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

// Minify js
gulp.task('minify-js', function (cb) {
  pump([
    gulp.src('build/js/app.js'),
    uglify(),
    gulp.dest('build/js')
  ],
  cb
  );
});

// Live reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

// Watch for changes in files
gulp.task('watch', ['browserSync', 'sass', 'scripts'], function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('default', function (callback) {
  runSequence('sass', 'scripts', ['minify-css', 'minify-js'],
    callback
  )
})
