const path = require('path');

let compilePath;
if (process.env.DEMO === 'demo') {
  compilePath = '/demo/';
} else {
  if (process.env.NODE_ENV === 'production') {
    compilePath = '/assets/';
  } else {
    compilePath = '/';
  }
}

const PUBLIC_PATH = compilePath;
const src = path.join(process.cwd(), 'src');
const dist = path.join(process.cwd(), 'dist');


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
    block: {
      src: path.join(src, '/blocks'),
    },
    svg: {
        src: path.join(src, '/images/svg/*.svg')
    }
};

module.exports = config;