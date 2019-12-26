/**
 * Минификация изображений
 */
var gulp = require('gulp'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin'),
  imageminJpegRecompress = require('imagemin-jpeg-recompress'),
  imageminPngquant = require('imagemin-pngquant'),
  paths = require('../../config/environments.config').images;

gulp.task('imagemin', function () {
  gulp.src(paths.src)
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
        ]
      }),
    ]))
    .pipe(gulp.dest(paths.dist));
});
