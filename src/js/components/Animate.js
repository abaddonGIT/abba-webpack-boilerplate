/**
 * Created by Abaddon on 08.07.2016.
 */
var wow = require('../vendors/wow/wow.js').WOW;

class Animate {
    constructor() {

    }

    init() {
        var wow = new WOW(
            {
                boxClass: 'wool',
                animateClass: 'animated',
                offset: 200,
                mobile: true, 
                live: true,
                callback: function (box) {

                }
            }
        );
        wow.init();
    }
}

export default new Animate();