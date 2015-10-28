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
  dist: "./build",
  src: "./src",

  docsSrc: "./docs",
  docsStyles: "./docs/styles",
  docsDist: "./docs/build",
  docsVendor: "./docs/vendor/*.*"
};

var files = {
  lessMain: "canvas",

  docsLessMain: "docs",
  docsHTML: dirs.docsSrc + "/" + "index.html"
};

// Gulp Tasks
gulp.task("html", function () {
  return gulp.src(files.docsHTML)
    .pipe(gulp.dest(dirs.docsDist));
});

gulp.task("move", function () {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src(dirs.docsVendor, {base: dirs.docsSrc})
  .pipe(gulp.dest(dirs.docsDist));
});

gulp.task("less", function () {
  return gulp.src(dirs.src + "/" + files.lessMain + ".less")
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [dirs.src], // @import paths
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

gulp.task("docs:less", function () {
  return gulp.src(dirs.docsStyles + "/" + files.docsLessMain + ".less")
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [dirs.docsSrc], // @import paths
      plugins: [colorLighten]
    }))
    .on("error", function (err) {
      util.log(err.message);
      this.emit("end");
    })
    .pipe(autoprefixer({browsers: ["last 2 versions"]}))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirs.docsDist));
});

gulp.task("watch", function () {
  gulp.watch("./**/*.less", ["docs:less"]);
  gulp.watch(files.docsHTML, ["html"]);
});

gulp.task("dist", ["less"]);

gulp.task("docs:dist", ["docs:less", "html", "move"]);

gulp.task("default", ["docs:dist", "watch"]);
