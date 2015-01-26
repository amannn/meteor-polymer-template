var PATHS = {
  SASS: {
    IN: '../public/app-components/**/*.scss',
    OUT: '../public/app-components'
  }
}

// Requires
///////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp'),
$        = require('gulp-load-plugins')();


// Main tasks
///////////////////////////////////////////////////////////////////////////////

gulp.task('serve', ['sass', 'watch']);
gulp.task('default', ['serve']);


// Sub tasks
///////////////////////////////////////////////////////////////////////////////

gulp.task('sass', function() {
  return gulp.src(PATHS.SASS.IN)
    .pipe($.sass())
    .pipe($.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(PATHS.SASS.OUT));
});

gulp.task('watch', function() {
  gulp.watch(PATHS.SASS.IN, ['sass']);
});
