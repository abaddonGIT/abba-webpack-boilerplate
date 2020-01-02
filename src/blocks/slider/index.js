import '../../js/vendors/flex/flexslider.css';

require('../../js/vendors/flex/jquery.flexslider-min');

const mainSlider = (domSlider, options = {
  touch: true,
  animationSpeed: 2000,
}) => {
  if (domSlider) {
    const speed = +domSlider.getAttribute('data-speed');
    $(domSlider)
      .flexslider({
        ...options,
        ...{
          slideshowSpeed: Number.isNaN(speed) ? 5000 : speed,
        },
      });
  }
};

export default mainSlider;
