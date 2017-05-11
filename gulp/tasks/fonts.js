/**
 * Сканирует папку со шрифтами и формирует less файл для них
 */
var gulp = require("gulp"),
    fs = require("fs"),
    file = require('gulp-file'),
    paths = require('../../environments.config').fonts;


gulp.task('fonts', function () {
    var code = "";

    function getFolders() {
        return fs.readdirSync(paths.src)
            .filter(function (file) {
                if (file.split('.').length < 2) {
                    code += `@font-face {
                        font-family: "${file}";
                        src: url("./fonts/${file}/${file}.eot");
                        src: url("./fonts/${file}/${file}.eot?#iefix")format("embedded-opentype"),
                        url("./fonts/${file}/${file}.woff") format("woff"),
                        url("./fonts/${file}/${file}.ttf") format("truetype");
                        font-style: normal;
                        font-weight: normal;
                    }`;
                }
            });
    }

    getFolders();

    return file('fonts.less', code).pipe(gulp.dest(paths.dist));
});