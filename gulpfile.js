const gulp = require("gulp");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const uglify = require("gulp-uglify");
const sourcemaps = require("gulp-sourcemaps");
const buffer = require("vinyl-buffer");

gulp.task("build:src", function () {
    return browserify({
        basedir: ".",
        debug: true,
        entries: ["src/index.ts"],
        cache: {},
        packageCache: {},
        standalone: "gimme-a-monster"
    })
    .plugin(tsify)
    .bundle()
    .pipe(source("index.js")) // Minify ts files with package name | end 
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write("./")) // Uglify | end
    .pipe(gulp.dest("dist")); // Set destination to dist
});

gulp.task('build:cli', () => {
    return gulp.src('./src/cli.js')
        .pipe(uglify())
        .pipe(gulp.dest('bin'));
});

gulp.task('build', gulp.parallel(['build:src', 'build:cli']));
gulp.task('default', gulp.series('build'));

