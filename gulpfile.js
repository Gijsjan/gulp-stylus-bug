gulp = require('gulp');
stylus = require('gulp-stylus');

gulp.task('stylus', function() {
	gulp.src(['./node_modules/some-module/**/*.styl', './stylus/**/*.styl'])
		.pipe(stylus({
			errors: true
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['stylus']);