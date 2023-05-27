const concat = require("gulp-concat");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const browsersync = require('browser-sync').create();
const cleanCSS = require("gulp-clean-css");
//const clean = require("gulp-clean");
const minify = require("gulp-js-minify");

//Convert html files

gulp.task("convertHtml", () => {
  return gulp.src("*.html").pipe(gulp.dest("dist"));
});

//Convert Images

gulp.task("convertImages", function () {
  return gulp.src("src/img/**/*").pipe(imagemin()).pipe(gulp.dest("dist/img"));
});

//Compile scss files

gulp.task("compileScss", () => {
  return gulp
    .src("src/scss/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(concat("styles.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest("dist/css"));
});

//Minify js

gulp.task("minifyJs", () => {
  return gulp
    .src("src/js/*.js")
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(minify())
    .pipe(gulp.dest("dist/js"));
});

//Watch gulp tasks

gulp.task("watch", () => {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  gulp.watch("index.html", gulp.series("convertHtml", browsersync.reload));
  gulp.watch("src/scss/**/*.scss", gulp.series("compileScss"));
  gulp.watch("src/js/*.js", gulp.series("minifyJs"));
  gulp.watch("src/img/**/*", gulp.series("convertImages"));
});
