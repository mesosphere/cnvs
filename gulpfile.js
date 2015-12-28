// Load plugins

var autoprefixer  = require("gulp-autoprefixer"),
    browserSync   = require('browser-sync'),
    colorLighten  = require("less-color-lighten"),
    concat        = require("gulp-concat"),
    gulp          = require("gulp"),
    less          = require("gulp-less"),
    minifyCSS     = require("gulp-minify-css"),
    notify        = require('gulp-notify'),
    rename        = require("gulp-rename"),
    sourcemaps    = require("gulp-sourcemaps"),
    uglify        = require("gulp-uglify"),
    util          = require("gulp-util");

var reload        = browserSync.reload;

// Path Definitions

var dirs = {
  canvas: {
    path: "./",
    styles: "./styles",
    javascripts: "./javascripts",
    vendor: "./vendor/**/*.*",
    images: "./images/**/*.*",
    fonts: "./fonts/**/*.*",
    dist: {
      path: "./dist",
      styles: "./dist/styles",
      javascripts: "./dist/javascripts"
    }
  },
  docs: {
    path: "./docs",
    styles: "./docs/styles",
    javascripts: "./docs/javascripts",
    vendor: "./docs/vendor/**/*.*",
    images: "./docs/images/**/*.*",
    fonts: "./docs/fonts/**/*.*",
    dist: {
      path: "./docs/dist",
      styles: "./docs/dist/styles",
      javascripts: "./docs/dist/javascripts"
    }
  }
};

// File Definitions

var files = {
  canvas: {
    styles: "canvas",
    dist: {
      styles: {
        filename: "styles",
        suffix: ".min"
      },
      javascripts: {
        filename: "canvas",
        suffix: ".min"
      }
    }
  },
  docs: {
    styles: "styles",
    javascripts: "scripts",
    html: dirs.docs.path + "/" + "index.html",
    dist: {
      styles: {
        filename: "styles",
        suffix: ".min"
      },
      javascripts: {
        filename: "scripts",
        suffix: ".min"
      }
    }
  }
};

// Move Docs html to build folder

gulp.task("docs:html", function () {

  return gulp.src(files.docs.html)
    .pipe(gulp.dest(dirs.docs.dist.path));

});

// Move Canvas files to a new location

gulp.task("canvas:move", function () {

  return gulp.src([
      dirs.canvas.vendor,
      dirs.canvas.images,
      dirs.canvas.fonts
    ], {
      base: dirs.canvas.path
    })
    .pipe(gulp.dest(dirs.canvas.dist.path));

});

// Move Docs files to a new location

gulp.task("docs:move", function () {

  return gulp.src([
      dirs.docs.vendor,
      dirs.docs.images,
      dirs.docs.fonts
    ], {
      base: dirs.docs.path
    })
    .pipe(gulp.dest(dirs.docs.dist.path));

});

// Process Canvas LESS files

gulp.task("canvas:styles", function () {

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
    .pipe(rename({
      basename: files.canvas.dist.styles.filename,
      extname: ".css"
    }))
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: dirs.canvas.styles
    }))
    .pipe(gulp.dest(dirs.canvas.dist.styles))
    .pipe(minifyCSS())
    .pipe(rename({
      basename: files.canvas.dist.styles.filename,
      suffix: files.canvas.dist.styles.suffix,
      extname: ".css"
    }))
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: dirs.canvas.styles
    }))
    .pipe(gulp.dest(dirs.canvas.dist.styles));

});

// Process Docs LESS files

gulp.task("docs:styles", function () {

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
    .pipe(rename({
      basename: files.docs.dist.styles.filename,
      extname: ".css"
    }))
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: dirs.docs.styles
    }))
    .pipe(gulp.dest(dirs.docs.dist.styles))
    .pipe(minifyCSS())
    .pipe(rename({
      basename: files.docs.dist.styles.filename,
      suffix: files.docs.dist.styles.suffix,
      extname: ".css"
    }))
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: dirs.docs.styles
    }))
    .pipe(gulp.dest(dirs.docs.dist.styles));

});

// Process Canvas Javascript files

gulp.task("canvas:javascripts", function () {

  return gulp.src(dirs.canvas.javascripts + "/*.js")
    .pipe(concat(files.canvas.dist.javascripts.filename + ".js"))
    .pipe(gulp.dest(dirs.canvas.dist.javascripts))
    .pipe(rename({
      basename: files.canvas.dist.javascripts.filename,
      suffix: files.canvas.dist.javascripts.suffix,
      extname: ".js"
    }))
    .pipe(uglify({
      mangle: true,
      compress: true
    }))
    .pipe(gulp.dest(dirs.canvas.dist.javascripts));

});

// Process Docs Javascript files

gulp.task("docs:javascripts", function () {

  return gulp.src(dirs.docs.javascripts + "/*.js")
    .pipe(concat(files.docs.dist.javascripts.filename + ".js"))
    .pipe(gulp.dest(dirs.docs.dist.javascripts))
    .pipe(rename({
      basename: files.docs.dist.javascripts.filename,
      suffix: files.docs.dist.javascripts.suffix,
      extname: ".js"
    }))
    .pipe(uglify({
      mangle: true,
      compress: true
    }))
    .pipe(gulp.dest(dirs.docs.dist.javascripts));

});

// Wait for Docs Distribution then Launch Server

gulp.task('browser-sync', ['docs:dist'], function() {
  browserSync({
    server: {
      baseDir: 'docs/dist',
      open: true,
      notify: false
    }
  });
});

// Watch for file changes

gulp.task("watch", function () {

  gulp.watch("./**/*.less", ["docs:styles"]);
  gulp.watch(files.docs.html, ["docs:html"]).on('change', reload);

});

// Canvas Distribution Gulp Task

gulp.task("canvas:dist", ["canvas:styles", "canvas:javascripts", "canvas:move"]);

// Docs Distribution Gulp Task

gulp.task("docs:dist", ["docs:styles", "docs:javascripts", "docs:html", "docs:move"]);

// Default Gulp Task

gulp.task("default", ["browser-sync", "docs:dist", "canvas:dist", "watch"]);
