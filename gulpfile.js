var gulp = require('gulp');
var clean = require('gulp-clean');
var ghPages = require('gulp-gh-pages');
var browserSync = require('browser-sync');

var bases = {
  app: 'app/',
  dist: 'dist/',
  distModules: 'dist/modules'
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
  return gulp.src(['app/**', '!app/{typings,typings/**}', 'CNAME'])
    .pipe(gulp.dest(bases.dist));
});

gulp.task('modules', function () {
  return gulp.src('modules/**')
    .pipe(gulp.dest(bases.distModules));
});

gulp.task('dist', ['app', 'modules']);

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

