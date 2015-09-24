// dependencies
var autoprefixer = require("gulp-autoprefixer");
var colorLighten = require("less-color-lighten");
var gulp = require("gulp");
var less = require("gulp-less");
var minifyCSS = require("gulp-minify-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");

var dirs = {
  js: "js",
  jsDist: "js",
  styles: "css",
  stylesDist: "css"
};

var files = {
  lessSrc: "styles",
  cssDist: "styles",
  jsSrc: "scripts",
  jsDist: "scripts",
  jsDistSuffix: ".min"
};

gulp.task("less", function () {
  return gulp.src(dirs.styles + "/" + files.lessSrc + ".less")
    .pipe(less({
      paths: [dirs.styles], // @import paths
      plugins: [colorLighten]
    }))
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(dirs.stylesDist));
});

gulp.task("minify-css", ["less"], function () {
  return gulp.src(dirs.stylesDist + "/" + files.cssDist + ".css")
    .pipe(minifyCSS())
    .pipe(gulp.dest(dirs.stylesDist));
});

gulp.task("minify-js", function () {
  return gulp.src(dirs.js + "/" + files.jsSrc + ".js")
    .pipe(uglify({
      mangle: true,
      compress: true
    }))
    .pipe(rename({
      basename: files.jsDist,
      suffix: files.jsDistSuffix,
      extname: ".js"
    }))
    .pipe(gulp.dest(dirs.jsDist));
});

gulp.task("watch", function () {
  gulp.watch(dirs.styles + "/**/*.less", ["less"]);
});

gulp.task("default", ["dist", "watch"]);

gulp.task("dist", ["less", "minify-css", "minify-js"]);
