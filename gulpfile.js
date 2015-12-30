// Load plugins

var autoprefixer  = require("gulp-autoprefixer"),
    browserSync   = require('browser-sync'),
    clean         = require('gulp-clean'),
    colorLighten  = require("less-color-lighten"),
    concat        = require("gulp-concat"),
    cp            = require('child_process')
    gulp          = require("gulp"),
    htmlmin       = require('gulp-htmlmin'),
    jekyll        = require('gulp-jekyll');
    less          = require("gulp-less"),
    minifyCSS     = require("gulp-minify-css"),
    notify        = require('gulp-notify'),
    plumber       = require("gulp-plumber"),
    rename        = require("gulp-rename"),
    sourcemaps    = require("gulp-sourcemaps"),
    uglify        = require("gulp-uglify"),
    util          = require("gulp-util");

var reload        = browserSync.reload;

// Path Definitions

var dirs = {
  canvas: {
    path: ".",
    styles: "./styles",
    javascripts: "./javascripts",
    vendor: "./javascripts/vendor/**/*.*",
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
    vendor: "./docs/javascripts/vendor/**/*.*",
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
        filename: "canvas",
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

gulp.task('docs:html', function() {

  gulp.src(dirs.docs.dist.path + '/**/*.html')
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(dirs.docs.dist.path))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));

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
    .pipe(gulp.dest(dirs.docs.dist.path))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));

});

// Process Canvas LESS files

gulp.task("canvas:styles", function () {

  return gulp.src(dirs.canvas.styles + "/" + files.canvas.styles + ".less")
    .pipe(plumber())
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
    .pipe(gulp.dest(dirs.canvas.dist.styles))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));

});

// Process Docs LESS files

gulp.task("docs:styles", function () {

  return gulp.src(dirs.docs.styles + "/" + files.docs.styles + ".less")
    .pipe(plumber())
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
    .pipe(gulp.dest(dirs.docs.dist.styles))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));

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
    .pipe(gulp.dest(dirs.canvas.dist.javascripts))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));

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
    .pipe(gulp.dest(dirs.docs.dist.javascripts))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));

});

// Wait for Docs Distribution then Launch Server

gulp.task('browser-sync', ['jekyll'], function() {
  browserSync({
    server: {
      baseDir: 'docs/dist',
      open: true,
      notify: false
    },
    host: "localhost"
  });
});

// Start Jekyll Server

gulp.task('jekyll', function (gulpCallBack) {

  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build', '--source=' + dirs.docs.path, '--destination=' + dirs.docs.dist.path], {
      stdio: 'inherit'
    });

  jekyll.on('exit', function(code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });

});

// Start Jekyll Server

gulp.task('jekyll-rebuild', ['jekyll'], function() {

  browserSync.reload();

});

// Watch for file changes

gulp.task("watch", function () {

  gulp.watch(dirs.docs.styles + "/**/*.less", ["docs:styles"]);
  gulp.watch(dirs.canvas.styles + "/**/*.less", ["canvas:styles"]);
  gulp.watch([
      dirs.docs.path + '/index.html',
      dirs.docs.path + '/_includes/**/*.html',
      dirs.docs.path + '/_layouts/**/*.html',
      dirs.docs.path + '/_posts/**/*'
    ], ['jekyll-rebuild']);

});

// Clean

gulp.task('clean', function() {

  return gulp.src([
      dirs.canvas.dist.path,
      dirs.docs.dist.path
    ], {
      read: false
    })
    .pipe(clean());

});

// Canvas Distribution Gulp Task

gulp.task("canvas:dist", ["canvas:styles", "canvas:javascripts", "canvas:move"]);

// Docs Distribution Gulp Task

gulp.task("docs:dist", ["docs:styles", "docs:javascripts", "docs:move"]);

// Docs Distribution Gulp Task

gulp.task("docs:serve", ["browser-sync"], function() {

  gulp.start('watch');

});

// Default Gulp Task

gulp.task('default', ['clean'], function() {

  gulp.start('docs:dist', 'canvas:dist', 'docs:serve');

});
