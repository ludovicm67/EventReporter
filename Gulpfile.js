var gulp = require("gulp"),
    del = require("del"),
    sass = require("gulp-sass"),
    uglify = require("gulp-uglify"),
    sourcemaps = require("gulp-sourcemaps"),
    notify = require("gulp-notify"),
    concat = require("gulp-concat");

gulp.task("clean", function() {
  return del(["public/**"]);
});

gulp.task("vendors-scripts", function() {
  return gulp.src([
      "node_modules/jquery/dist/jquery.js",
      "node_modules/bootstrap-sass/assets/javascripts/bootstrap.js"
    ])
    .pipe(sourcemaps.init())
      .pipe(concat("vendors.js"))
      .pipe(uglify())
    .pipe(sourcemaps.write(".", { includeContent: true }))
    .pipe(gulp.dest("public/js/"));
});

gulp.task("scripts", function() {
  return gulp.src("assets/js/*.js")
    .pipe(sourcemaps.init())
      .pipe(concat("scripts.js"))
      .pipe(uglify())
      .on("error", notify.onError({
        title: "JS Error",
        message: "<%= error.message %>"
      }))
    .pipe(sourcemaps.write(".", { includeContent: true }))
    .pipe(gulp.dest("public/js/"));
});

gulp.task("sass", function() {
  return gulp.src("assets/scss/style.scss")
    .pipe(sourcemaps.init())
      .pipe(sass({
        outputStyle: "compressed",
        sourceMapContents: true,
        includePaths: ["node_modules/bootstrap-sass/assets/stylesheets/"]
      }))
      .on("error", notify.onError({
        title: "SASS Error",
        message: "<%= error.message %>"
      }))
    .pipe(sourcemaps.write(".", { includeContent: true }))
    .pipe(gulp.dest("public/css/"));
});

gulp.task("watch", ["build"], function() {
  gulp.watch("assets/js/**/*", ["scripts"]);
  gulp.watch("assets/scss/**/*", ["sass"]);
});

gulp.task("build", ["scripts", "vendors-scripts", "sass"]);
