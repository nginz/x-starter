var gulp        = require('gulp')
    browserify  = require('browserify'),
    watchify    = require('watchify'),
    uglify      = require('gulp-uglify'),
    eslint      = require('gulp-eslint'),
    babelify    = require('babelify'),
    notify      = require('gulp-notify'),
    sourcemaps  = require('gulp-sourcemaps'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    del         = require('del');

var config = {
  js: {
    bundle: {entries: './app/app.jsx', debug: true},
    source: 'app.js',
    dist: './app/build/js'
  }
}

gulp.task('clean', function(cb) {
  del([config.build], cb);
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify(config.js.bundle, watchify.args));
  bundler.transform(babelify)

  function rebundle(){
    return bundler.bundle()
      .on('error', notify.onError())
      .pipe(source(config.js.source))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.js.dist));
  }

  bundler.on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  var bundler = browserify(config.js.bundle);
  bundler.transform(babelify)
    .bundle()
    .pipe(source(config.js.source))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.js.dist));
});

gulp.task('lint', function(){
  return gulp.src(['./app/**/*.js', './app/**/*.jsx'])
    .pipe(eslint())
    .pipe(eslint.format())
});

gulp.task('build', ['clean'], function() {
  process.env.NODE_ENV = 'production';
  gulp.start(['browserify']);
});

gulp.task('default', function() {
  console.log('Run "gulp watchify or gulp build"');
});
