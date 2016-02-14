var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');


gulp.task('connect', function() {
  connect.server({
  	root: 'dist',
  	port: '8000',
  	livereload: true
  });
});

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist/css/'))
		.pipe(connect.reload());
});

gulp.task('html', function () {
  return gulp.src('src/*.html')
  	.pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js/'))
    .pipe(connect.reload());
});

gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

gulp.task('data', function () {
  return gulp.src('src/data/*')
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/*.html', ['html']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/data/*', ['data']);
});

gulp.task('default', ['images','data', 'js', 'sass', 'html', 'connect', 'watch']);