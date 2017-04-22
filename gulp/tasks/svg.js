/**
 * Created by abaddon on 21.04.2017.
 * Для svg спрайтов
 */
const gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    config = require('../../environments.config').svg;

gulp.task('svg', function () {
    return gulp.src(config.src)
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
            },
            parseOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        //Тут строим прайс
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../../sprite.svg",
                    render: {
                        scss: {
                            dest: '../../../../sass/sprite.scss',
                            template: './src/sass/templates/sprite_template.scss'
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest('./src/images/sprite/'));
});