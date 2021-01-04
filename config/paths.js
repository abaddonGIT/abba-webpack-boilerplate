const path = require('path')

const VENDORS = [{
  source: 'jquery/dist/',
  destination: 'jquery',
}, {
  source: 'jquery-migrate/dist/',
  destination: 'jquery-migrate',
}, {
  source: 'jquery-selectric/src/',
  destination: 'jquery-selectric',
}, {
  source: 'jquery.maskedinput/src/',
  destination: 'maskedInput',
}, {
  source: '@webcomponents/webcomponentsjs/',
  destination: 'webcomponents',
}, {
  source: '@fancyapps/fancybox/dist/',
  destination: 'fancybox',
}, {
  source: 'owl.carousel/dist/',
  destination: 'owlCarousel',
}, {
  source: 'nouislider/distribute/',
  destination: 'noUiSlider',
}]

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),

  vendors: VENDORS,
}
