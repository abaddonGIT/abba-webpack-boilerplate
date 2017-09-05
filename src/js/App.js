/**
 * Created by abaddon on 26.05.2017.
 *
 */
'use strict';
class Application {
    constructor() {
        this.body = document.querySelector('body');
    }

    /**
     * Run application function
     */
    start() {
        SvgEvery();
        if (isMobile.any) {
            _addClass(this.body, 'is-mobile');
        }

        //Анимация для страницы
        if (document.querySelectorAll('.wool').length) {
            require.ensure([], (require) => {
                const Anim = require('./components/Animate').default;
                Anim.init();
            });
        }
        //Навигация
        require.ensure([], (require) => {
            const Nav = require('../blocks/header/menu/index').default;
            Nav.init();
        });

        //Отложенная подгрузка изображений
        const Images = document.querySelectorAll('.js-lazy');
        if (Images.length) {
            require.ensure([], (require) => {
                const Lazy = require('./components/LazyLoad').default;
                Lazy.init();
            });
        }

        this.initFancybox();
    }

    /**
     * Подключение fancybox
     */
    initFancybox() {
        const fancy = document.querySelectorAll(".js-fancy") || [];
        if (fancy.length) {
            require.ensure([], (require) => {
                require('./vendors/fancybox/jquery.fancybox.pack');
                require('./vendors/fancybox/jquery.fancybox.css');
                $(".js-fancy").fancybox();
            });
        }
    }
}

export default new Application();