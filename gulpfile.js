const gulp = require('gulp'),
      traceur = require('gulp-traceur'),
      sourcemaps = require('gulp-sourcemaps'),
      clean = require('gulp-clean'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename')
      browserify = require('gulp-browserify')

gulp.task('default', ['build'])

gulp.task('build', ['build-clean'], () => {
  gulp.src('src/main.js')
    .pipe(sourcemaps.init())
    .pipe(traceur())
    .pipe(sourcemaps.write())
    .pipe(browserify({
      debug: true,
      loadMaps: true
    }))
    .pipe(rename('unnamed.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('unanmed.min.js'))
    .pipe(gulp.dest('dist'))
})

gulp.task('build-clean', () => {
  gulp.src(['dist/*'], {read: 0}).pipe(clean())
})
