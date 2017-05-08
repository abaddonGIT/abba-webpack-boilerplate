/**
 * Created by Abaddon on 26.02.2017.
 */
import "../../vendors/flex/flexslider.css";
require('../../vendors/flex/jquery.flexslider-min');
import "./style.less";

class MainSlider {
    constructor() {
        this.slider = document.querySelector(".js-slider");
    }

    init() {
        if (this.slider) {
            const speed = +this.slider.getAttribute('data-speed');
            $(this.slider).flexslider({
                touch: true,
                slideshowSpeed: isNaN(speed) ? 5000 : speed,
                animationSpeed: 2000
            });
        }
    }
}

export default new MainSlider();