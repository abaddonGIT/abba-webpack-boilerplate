/**
 * Created by Abaddon on 06.02.2017.
 *  Application entry point
 */
"use strict";
import "normalize.css";
import "../css/style.less";
import jQuery from "jquery";
import "./vendors/migrate";
 
class Application {
    constructor() {
        global.$ = global.jQuery = jQuery;
    }

    /**
     * Run application function
     */
    start() {
        require.ensure([], (require) => {
            const Anim = require('./components/Animate').default;
            Anim.init();
        });
        console.log("hello word!");
    } 
}

(function () {
    const App = new Application();
    App.start();
}());
