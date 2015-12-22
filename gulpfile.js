// Dependencies

var autoprefixer = require("gulp-autoprefixer");
var colorLighten = require("less-color-lighten");
var gulp = require("gulp");
var less = require("gulp-less");
var sourcemaps = require("gulp-sourcemaps");
var minifyCSS = require("gulp-minify-css");
var util = require("gulp-util");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

// Path Definitions

var dirs = {
  canvas: {
    path: "./",
    styles: "./styles",
    javascripts: "./javascripts",
    dist: {
      path: "./build"
    }
  },
  docs: {
    path: "./docs",
    styles: "./docs/styles",
    javascripts: "./docs/javascripts",
    vendor: "./docs/vendor/**/*.*",
    images: "./docs/images/**/*.*",
    dist: {
      path: "./docs/build"
    }
  }
};

// File Definitions

var files = {
  canvas: {
    styles: "canvas"
  },
  docs: {
    styles: "docs",
    javascripts: "scripts",
    html: dirs.docs.path + "/" + "index.html",
    dist: {
      javascripts: {
        filename: "scripts",
        suffix: ".min"
      }
    }
  }
};

gulp.task("html", function () {

  return gulp.src(files.docs.html).pipe(gulp.dest(dirs.docs.dist.path));

});

// Move files to a new location

gulp.task("move", function () {

  // the base option sets the relative root for the set of files, preserving the folder structure
  gulp.src([dirs.docs.vendor, dirs.docs.images], {base: dirs.docs.path}).pipe(gulp.dest(dirs.docs.dist.path));

});

// Process LESS files

gulp.task("less", function () {

  return gulp.src(dirs.canvas.styles + "/" + files.canvas.styles + ".less")
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [dirs.canvas.styles],
      plugins: [colorLighten]
    }))
    .on("error", function (err) {
      util.log(err.message);
      this.emit("end");
    })
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirs.canvas.dist.path));

});

// Process Docs LESS files

gulp.task("docs:less", function () {

  return gulp.src(dirs.docs.styles + "/" + files.docs.styles + ".less")
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [dirs.docs.styles],
      plugins: [colorLighten]
    }))
    .on("error", function (err) {
      util.log(err.message);
      this.emit("end");
    })
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dirs.docs.dist.path));

});

// Process Docs JS files

gulp.task("docs:js", function () {

  return gulp.src(dirs.docs.javascripts + "/" + files.docs.javascripts + ".js")
    .pipe(uglify({
      mangle: true,
      compress: true
    }))
    .pipe(rename({
      basename: files.docs.dist.javascripts.filename,
      suffix: files.docs.dist.javascripts.suffix,
      extname: ".js"
    }))
    .pipe(gulp.dest(dirs.docs.dist.path));

});

// Watch for file changes

gulp.task("watch", function () {

  gulp.watch("./**/*.less", ["docs:less"]);
  gulp.watch(files.docs.html, ["html"]);

});

// Distribution Gulp Task

gulp.task("dist", ["less"]);

// Docs Distribution Gulp Task

gulp.task("docs:dist", ["docs:less", "docs:js", "html", "move"]);

// Default Gulp Task

gulp.task("default", ["docs:dist", "watch"]);
