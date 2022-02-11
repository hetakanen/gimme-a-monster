 import browserify from "browserify";
 import source from "vinyl-source-stream";
 import tsify from "tsify";
 import uglify from "gulp-uglify";
 import sourceMaps from "gulp-sourcemaps";
 import buffer from "vinyl-buffer";
 import gulp from 'gulp';

const { task, parallel, series } = gulp;
const { init, write } = sourceMaps;

gulp.task('build:src', function () {
    return browserify({
      basedir: ".",
      debug: true,
      entries: ["src/index.ts"],
      cache: {},
      packageCache: {},
    })
    .plugin(tsify)
    .bundle()
    .pipe(source("index.js"))
    .pipe(buffer())
    .pipe(init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(write("./"))
    .pipe(gulp.dest("dist"));
});

gulp.task('build:cli', function () {
  return browserify({
    basedir: ".",
    debug: true,
    entries: ["cli.js"],
    cache: {},
    packageCache: {},
  })
  .bundle()
  .pipe(source("cli.js"))
  .pipe(buffer())
  .pipe(init({ loadMaps: true }))
  .pipe(uglify())
  .pipe(write("./"))
  .pipe(gulp.dest("bin"));
});

task('build', parallel(['build:src', 'build:cli']));
task('default', series('build'));