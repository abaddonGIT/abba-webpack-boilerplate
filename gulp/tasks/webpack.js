/**
 * Created by Abaddon on 23.02.2017.
 * Запуск webpack 2
 */
var gulp = require('gulp');
var webpackStream = require('webpack-stream');
var webpack2 = require('webpack');

gulp.task('webpack', function () {
    return gulp.src('./src/js/index.app.js')
        .pipe(webpackStream(require('../../webpack.config.babel.js'), webpack2))
        .pipe(gulp.dest('./dist'));
});
