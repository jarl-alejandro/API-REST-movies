'use strict'

const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')

gulp.task('build', function(){
  browserify({
    entries: './public/app/scripts/app.js',
    extensions: ['.js'],
    debug:true
  })
  .transform([babelify])
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./public/dist/js'))
})

gulp.task('watch', function() {
  gulp.watch('./public/app/scripts/**/*.js', ['build'])
})

gulp.task('default', ['watch'])
