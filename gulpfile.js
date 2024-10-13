const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));


gulp.task("styles", function () {
  return gulp
    .src("simple.scss") 
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(".")); 
});

gulp.task("default", gulp.series("styles"));
