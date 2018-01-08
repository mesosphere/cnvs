// Load plugins

var argv          = require('yargs').argv;
var autoprefixer  = require('gulp-autoprefixer');
var browserSync   = require('browser-sync');
var concat        = require('gulp-concat');
var cp            = require('child_process');
var gulp          = require('gulp');
var ifElse        = require('gulp-if-else');
var less          = require('gulp-less');
var minifyCSS     = require('gulp-minify-css');
var notify        = require('gulp-notify');
var plumber       = require('gulp-plumber');
var rename        = require('gulp-rename');
var sourcemaps    = require('gulp-sourcemaps');
var stylelint     = require('gulp-stylelint');
var uglify        = require('gulp-uglify');
var util          = require('gulp-util');

// Define Variables

var config = {};
var config_vars = {
  dev: {

    jekyllConfig: "_config.dev.yml"

  },
  prod: {

    jekyllConfig: "_config.yml"

  }
};
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
var messages = {
  jekyllBuild: 'Running $ jekyll build'
};

var dirs = {
  cnvs: {
    path: "./",
    styles: "./styles",
    dist: {
      path: "./dist",
      styles: "./dist"
    }
  },
  docs: {
    path: "./docs",
    assets: "./docs/_assets",
    styles: "./docs/_assets/styles",
    javascripts: "./docs/_assets/javascripts",
    vendor: "./docs/_assets/javascripts/vendor/**/*.*",
    images: "./docs/_assets/images/**/*.*",
    fonts: "./docs/_assets/fonts/**/*.*",
    dist: {
      path: "./docs/_site",
      assets: "./docs/_site/assets",
      styles: "./docs/_site/assets/styles",
      javascripts: "./docs/_site/assets/javascripts",
      vendor: "./docs/_site/assets/javascripts/vendor",
      images: "./docs/_site/assets/images",
      fonts: "./docs/_site/assets/fonts",
    }
  }
};

var files = {
  cnvs: {
    styles: "cnvs",
    dist: {
      styles: {
        filename: "cnvs",
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

// Build and Serve Documentation

gulp.task('serve', ['browser-sync', 'watch']);

// Build cnvs and Documentation

gulp.task('build', ['cnvs:build', 'docs:build']);

// Build CNVS Styles

gulp.task('cnvs:build', ['cnvs:styles']);

// Build Documentation Styles, Javascript, and Move Assets

gulp.task('docs:build', ['docs:styles', 'docs:javascripts', 'docs:move']);

// Serve Documentation Site

gulp.task('docs:dist', ['docs:build', 'jekyll-build']);

// Watch for changes

gulp.task('watch', function () {

  gulp.watch([dirs.docs.styles + '/**/*.less'], ['docs:styles']);
  gulp.watch([dirs.docs.javascripts + '/**/*.js'], ['docs:javascripts']);
  gulp.watch([dirs.docs.images + '/**/*'], ['docs:move']);
  gulp.watch([dirs.cnvs.styles + '/**/*.less'], ['cnvs:styles', 'docs:styles']);
  gulp.watch([
    dirs.docs.path + '/**/*.html',
    dirs.docs.path + '/**/*.md',
    dirs.docs.path + '/_data/**/*',
    '!' + dirs.docs.dist.path + '/**/*'
  ], ['jekyll-rebuild']);

});

// Move Documentation Assets to Documentation Distribution Directory

gulp.task("docs:move", function () {

  return gulp.src([
      dirs.docs.vendor,
      dirs.docs.images,
      dirs.docs.fonts
    ], {
      base: dirs.docs.assets
    })
    .pipe(gulp.dest(dirs.docs.dist.assets));

});

// Compile and Process cnvs Styles

gulp.task("cnvs:styles", function () {

  return gulp.src(dirs.cnvs.styles + "/" + files.cnvs.styles + ".less")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [dirs.cnvs.styles]
    }))
    .on("error", function (err) {
      util.log(err.message);
      this.emit("end");
    })
    .pipe(autoprefixer({
      browsers: ["last 2 versions"]
    }))
    .pipe(rename({
      basename: files.cnvs.dist.styles.filename,
      extname: ".css"
    }))
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: dirs.cnvs.styles
    }))
    .pipe(gulp.dest(dirs.cnvs.dist.styles))
    .pipe(minifyCSS())
    .pipe(rename({
      basename: files.cnvs.dist.styles.filename,
      suffix: files.cnvs.dist.styles.suffix,
      extname: ".css"
    }))
    .pipe(sourcemaps.write('./', {
      includeContent: false,
      sourceRoot: dirs.cnvs.styles
    }))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(dirs.cnvs.dist.styles));

});

// Lint cnvs Styles

gulp.task("cnvs:stylelint", function () {

  return gulp.src(dirs.cnvs.styles + '/**/*.less')
    .pipe(stylelint({
      reporters: [{
        formatter: 'string',
        console: false
      }]
    }));

});

// Compile and Process Documentation Styles

gulp.task("docs:styles", function () {

  return gulp.src(dirs.docs.styles + "/" + files.docs.styles + ".less")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [dirs.docs.styles]
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
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest(dirs.docs.dist.styles));

});

// Lint Documentation Styles

gulp.task("docs:stylelint", function () {

  return gulp.src(dirs.docs.styles + '/**/*.less')
    .pipe(stylelint({
      reporters: [{
        formatter: 'string',
        console: false
      }]
    }));

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
      mangle: false,
      compress: true
    }).on("error", function (err) {
      util.log(err.message);
      this.emit("end");
    }))
    .pipe(gulp.dest(dirs.docs.dist.javascripts));

});

// Start Documentation Site

gulp.task('browser-sync', ['docs:build', 'jekyll-build'], function() {

  var files = [
    dirs.docs.dist.styles + '/**/*.css',
    dirs.docs.dist.javascripts + '**/*.js',
    dirs.docs.dist + 'images/**/*'
  ];

  browserSync({
    files: files,
    injectChanges: true,
    server: {
      baseDir: dirs.docs.dist.path,
      open: true,
      notify: false
    }
  });

});

// Start Jekyll Server

gulp.task('jekyll-build', function (done) {

  ifElse(argv.production, function() {
    config = config_vars.prod;
  }, function() {
    config = config_vars.dev;
  });

  browserSync.notify(messages.jekyllBuild);

  return cp.spawn(
    jekyll,
    [
      'build',
      '--config=' + dirs.docs.path + '/' + config.jekyllConfig,
      '--source=' + dirs.docs.path,
      '--destination=' + dirs.docs.dist.path
    ], {
      stdio: 'inherit'
    }).on('close', done);

});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {

  browserSync.reload();

});
