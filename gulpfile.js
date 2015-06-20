var gulp = require('gulp');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');

var bases = {
  app: 'app/',
  dist: 'dist/',
};
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: 'app',
      routes: {
        "/modules": "modules"
      }
    }
  });
  gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], { cwd: 'app' }, reload);
});

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src(bases.dist)
 .pipe(clean());
});

gulp.task('app', function () {
  return gulp.src(['app/**', '!app/{typings,typings/**}'])
    .pipe(gulp.dest(bases.dist));
});


gulp.task('modules', function () {
  return gulp.src('modules/**')
    .pipe(gulp.dest('dist/modules'));
});

gulp.task('dist', ['clean', 'app', 'modules']);

