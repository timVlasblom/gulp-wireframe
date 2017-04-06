var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence').use(gulp);

gulp.task('default', function () {
	runSequence('sass', 'minify-css', 'watch');
});
