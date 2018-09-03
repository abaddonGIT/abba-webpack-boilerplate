/**
 * Created by abaddon on 02.09.2018.
 */
const path = require('path');

const PATHS = {
  src: path.join(process.cwd(), 'src'),
  dist: path.join(process.cwd(), 'dist')
};
const PORT = 3000;

/**
 * Настройки для svg иконок
 * @type {{src: (*), spritePath: string, dist: string, template: (*)}}
 */
const SVG = {
  src: path.join(PATHS.src, '/images/svg/*.svg'),
  spritePath: '../../sprite.svg',
  dist: '../../../css/svg-icons.scss',
  template: path.join(process.cwd(), 'gulp/template/sprite_template.scss')
};
/**
 * Настройки для генератора фавиконок
 * @type {{logo: (string|*), dist: (string|*), options: {appName: string, appDescription: string, developerName: string, developerURL: string, url: string}}}
 */
const FAVICON = {
  logo: path.join(PATHS.src, '/images/logo.png'),
  dist: path.join(PATHS.src, '/favicon'),
  options: {
    appName: "Start App",
    appDescription: "This is start application",
    developerName: "abaddon",
    developerURL: "https://github.com/abaddonGIT",
    url: "https://github.com/abaddonGIT",
  }
};

/**
 * Настройки для png спрайтов
 * @type {{src: (*), dist: (*), css: (*), imgPath: string}}
 */
const SPRITE = {
  src: path.join(PATHS.src, '/sprites/*.png'),
  dist: path.join(PATHS.src, '/images'),
  css: path.join(PATHS.src, '/css'),
  imgPath: '../images/sprites.png',
};

module.exports = {
  PATHS,
  PORT,
  SVG,
  FAVICON,
  SPRITE,
};