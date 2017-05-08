/**
 * Created by Abaddon on 09.04.2017.
 */
import "../../vendors/owl/owl.carousel.css";
import "../../vendors/owl/owl.carousel.min";
import "./style.less";

class Carusel {
    constructor() {
        this.carusel = document.querySelectorAll('.js-owl');
    }

    init() {
        const ln = this.carusel.length;
        if (ln) {
            for (let i = 0; i < ln; i++) {
                const carusel = this.carusel[i];
                $(carusel).owlCarousel({
                    loop: false,
                    margin: 40,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        400: {
                            items: 2,
                            nav: true
                        },
                        768: {
                            items: 3,
                            nav: true
                        },
                        992: {
                            items: 5,
                            nav: true
                        }
                    }
                });
            }
        }
    }
}

export default new Carusel();