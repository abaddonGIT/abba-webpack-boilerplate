const path = require('path');
const PUBLIC_PATH = "/";
const src = path.join(__dirname, './src');
const dist = path.join(__dirname, './dist');

const config = {
    sourcePath: src,
    distPath: dist,
    publicPath: PUBLIC_PATH,
    fonts: {
        src: path.join(src, '/css/fonts'),
        dist: path.join(src, '/css')
    },
    images: {
        src: path.join(src, '/images/**'),
        dist: path.join(dist, '/images')
    },
    sprites: {
        src: path.join(src, '/sprites/*.png'),
        dist: path.join(src + '/images'),
        name: 'sprites.png',
        cssName: 'sprites.less',
        type: 'less',
        imagePath: '../images/',
        cssPath: path.join(src + '/css'),
        padding: 5
    },
    svg: {
        src: path.join(src, '/images/svg/*.svg')
    }
};

module.exports = config;