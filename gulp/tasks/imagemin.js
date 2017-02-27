/**
 * Минификация изображений
 */
var gulp = require('gulp'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    paths = require('../../environments.config').images;

gulp.task('imagemin', function () {
    gulp.src(paths.src)
        .pipe(changed(paths.dist))
        .pipe(imagemin())
        .pipe(gulp.dest(paths.dist));
});