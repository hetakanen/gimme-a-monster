var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var buffer = require("vinyl-buffer");

gulp.task("default", function () {
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