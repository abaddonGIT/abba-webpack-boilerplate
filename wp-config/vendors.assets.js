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
}];

module.exports = [...VENDORS];
