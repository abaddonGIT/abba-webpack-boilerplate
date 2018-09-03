/**
 * Created by abaddon on 21.04.2017.
 * Для svg спрайтов
 */
const { SVG } = require('../../config/constants');
const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');

gulp.task('svg', function () {
  return gulp.src(SVG.src)
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    //Сносимненужные тэги со стилями
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
        $('defs').remove();
        $('style').remove();
      },
      parseOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    //Тут строим прайс
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: SVG.spritePath,
          render: {
            scss: {
              dest: SVG.dist,
              template: SVG.template
            }
          }
        }
      }
    }))
    .pipe(gulp.dest('./src/images/sprite/'));
});