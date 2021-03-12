const gulp = require('gulp'),
  webserver = require('gulp-server-io'),
  dest = 'builds/codeclinic/';

gulp.task('html', function() {
  gulp.src(dest + '**/*.html');
});

// Regular CSS
gulp.task('css', function() {
  gulp.src(dest + '**/*.css');
});

// JavaScript ES6
gulp.task('js', function() {
  gulp.src(dest + '**/*.js');
});

gulp.task('watch', function() {
  gulp.watch(dest + '**/*.js', ['js']);
  gulp.watch(dest + '**/*.css', ['css']); //CSS
  gulp.watch(dest + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(dest).pipe(
    webserver({
      serverReload: {
        dir: dest,
<<<<<<< HEAD
        config: {verbose: true, debounce: 1000}
=======
        config: { verbose: true, debounce: 1000 }
>>>>>>> b3ad9b5b8e46bbaca7e5b29396537c25ef449bd6
      },
      port: 3000,
      open: true
    })
  );
});

gulp.task('default', ['html', 'css', 'js', 'webserver', 'watch']);
