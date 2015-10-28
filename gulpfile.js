// Dependencies
var autoprefixer = require("gulp-autoprefixer");
var colorLighten = require("less-color-lighten");
var gulp = require("gulp");
var less = require("gulp-less");
var sourcemaps = require("gulp-sourcemaps");
var minifyCSS = require("gulp-minify-css");
var util = require("gulp-util");

// Path Defintions
var dirs = {
  dist: "build",
  styles: "./",
  vendor: "./vendor/*.*"
};

var files = {
  lessSrc: "canvas",
  srcHTML: "index.html"
};

gulp.task("html", function () {
  return gulp.src(files.srcHTML)
    .pipe(gulp.dest(dirs.dist));
});

gulp.task("move", function () {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(dirs.vendor, {base: "./"})
  .pipe(gulp.dest(dirs.dist));
});

// Gulp Tasks
gulp.task("less", function () {
  return gulp.src(dirs.styles + "/" + files.lessSrc + ".less")
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [dirs.styles], // @import paths
      plugins: [colorLighten]
    }))
    .on("error", function (err) {
      util.log(err.message);
      this.emit("end");
    })
    .pipe(autoprefixer({browsers: ["last 2 versions"]}))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirs.dist));
});

gulp.task("watch", function () {
  gulp.watch(dirs.styles + "/**/*.less", ["less"]);
  gulp.watch(files.srcHTML, ["html"]);
});

gulp.task("dist", ["less", "html", "move"]);

gulp.task("default", ["dist", "watch"]);
