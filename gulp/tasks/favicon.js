/**
 * Created by abaddon on 28.07.2017.
 */
const { FAVICON } = require('../../config/constants');
const favicons = require('gulp-favicons');
const gulp = require('gulp');
const gutil = require('gulp-util');

gulp.task('favicon', function () {
  return gulp.src(FAVICON.logo).pipe(favicons(Object.assign({
    background: "#fff",
    path: "favicon/",
    display: "fullscreen",
    orientation: "portrait",
    start_url: "/?homescreen=1",
    version: 1.0,
    logging: false,
    online: false,
    html: "favicon.html",
    pipeHTML: true,
    replace: true
  }, FAVICON.options)))
    .on("error", gutil.log)
    .pipe(gulp.dest(FAVICON.dist));
});