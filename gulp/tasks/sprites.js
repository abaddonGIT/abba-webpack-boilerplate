/**
 * Created by abaddon on 27.01.2015.
 */
const { SPRITE } = require('../../config/constants');
const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

gulp.task('sprites', function () {
  const sprite = gulp.src(SPRITE.src)
    .pipe(spritesmith({
      imgName: 'sprites.png',
      cssName: 'sprites.scss',
      imgPath: SPRITE.imgPath,
      cssFormat: 'scss',
      padding: 5,
      engineOpts: {
        "imagemagick": true
      }
    }));
  sprite.img.pipe(gulp.dest(SPRITE.dist));
  sprite.css.pipe(gulp.dest(SPRITE.css));
});