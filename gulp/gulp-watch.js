var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['sass' , 'minify-css']);
});
