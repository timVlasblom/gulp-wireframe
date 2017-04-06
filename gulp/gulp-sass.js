var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('build'));
});
