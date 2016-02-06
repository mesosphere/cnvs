// Load plugins

var argv          = require('yargs').argv,
    autoprefixer  = require("gulp-autoprefixer"),
    browserSync   = require('browser-sync'),
    clean         = require('gulp-clean'),
    colorLighten  = require("less-color-lighten"),
    concat        = require("gulp-concat"),
    cp            = require('child_process')
    gulp          = require("gulp"),
    htmlmin       = require('gulp-htmlmin'),
    ifElse        = require('gulp-if-else'),
    jekyll        = require('gulp-jekyll');
    less          = require("gulp-less"),
    minifyCSS     = require("gulp-minify-css"),
    notify        = require('gulp-notify'),
    plumber       = require("gulp-plumber"),
    rename        = require("gulp-rename"),
    sourcemaps    = require("gulp-sourcemaps"),
    uglify        = require("gulp-uglify"),
    util          = require("gulp-util");
    watchLess     = require('gulp-watch-less');

// Define Variables

var reload        = browserSync.reload;
var config        = {};

var config_vars   = {
  dev: {

    jekyllConfig: "_config.dev.yml"

  },
  prod: {

    jekyllConfig: "_config.prod.yml"

  }
};

var dirs = {
  canvas: {
    path: "./",
    styles: "./styles",
    dist: {
      path: "./dist",
      styles: "./dist"
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

var files = {
  canvas: {
    styles: "canvas",
    dist: {
      styles: {
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

// Default Gulp Task

gulp.task('default', ['serve']);

// Build Canvas and Documentation

gulp.task('build', ['canvas:build', 'docs:build']);

// Build and Serve Documentation

gulp.task('serve', ['build'], function() {

  ifElse(argv.production, function() {

    config = config_vars.prod;

  }, function() {

    config = config_vars.dev;

  });

  gulp.start('docs:serve');

});

// Watch for file changes

gulp.task("watch", function () {

  gulp.watch([dirs.docs.styles + "/**/*.less"], ["docs:styles"]);
  gulp.watch([dirs.canvas.styles + "/**/*.less"], ["canvas:styles", "docs:styles"]);
  gulp.watch([
      dirs.docs.path + '/index.html',
      dirs.docs.path + '/_includes/**/*.html',
      dirs.docs.path + '/_layouts/**/*.html',
      dirs.docs.path + '/_posts/**/*'
    ], ['jekyll-rebuild']);

});

// Build Canvas Styles

gulp.task("canvas:build", ["canvas:styles"]);

// Build Documentation Styles, Javascript, and Move Assets

gulp.task("docs:build", ["docs:styles", "docs:javascripts"]);

// Serve Documentation Site

gulp.task("docs:serve", ["browser-sync", "watch"]);

// Clean Canvas and Documentation Distribution  Directories

gulp.task('clean', function() {

  return gulp.src([
      dirs.canvas.dist.path,
      dirs.docs.dist.path
    ], {
      read: false
    })
    .pipe(clean());

});

// Minify Documentation HTML

gulp.task('docs:html', function() {

  gulp.src(dirs.docs.dist.path + '/**/*.html')
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(gulp.dest(dirs.docs.dist.path));

});

// Move Documentation Assets to Documentation Distribution Directory

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

// Compile and Process Canvas Styles

gulp.task("canvas:styles", function () {

  return gulp.src(dirs.canvas.styles + "/" + files.canvas.styles + ".less")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(watchLess(dirs.canvas.styles + '/**/*.less'))
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

// Compile and Process Documentation Styles

gulp.task("docs:styles", function () {

  return gulp.src(dirs.docs.styles + "/" + files.docs.styles + ".less")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(watchLess(dirs.docs.styles + '/**/*.less'))
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

// Process Documentation Javascript files

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

// Start Jekyll Server then start Documentation Site

gulp.task('browser-sync', ['jekyll'], function() {
  var files = [
      dirs.docs.dist.styles + '/**/*.css',
      dirs.docs.dist.javascripts + '**/*.js'
   ];

  browserSync({
    files,
    injectChanges: true,
    server: {
      baseDir: dirs.docs.dist.path,
      open: true,
      notify: false
    }
  });
});

// Start Jekyll Server

gulp.task('jekyll', function (gulpCallBack) {

  var spawn = require('child_process').spawn;
  var jekyll = spawn('jekyll', ['build', '--config=' + dirs.docs.path + '/' + config.jekyllConfig, '--source=' + dirs.docs.path, '--destination=' + dirs.docs.dist.path], {
      stdio: 'inherit'
    });

  jekyll.on('exit', function(code) {
    gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: ' + code);
  });

});

// Rebuild Jekyll Server

gulp.task('jekyll-rebuild', ['jekyll'], function() {

  browserSync.reload();

});
