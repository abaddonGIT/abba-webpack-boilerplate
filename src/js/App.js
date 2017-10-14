/**
 * Created by abaddon on 26.05.2017.
 */
/* global SvgEvery, isMobile */

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
        this.body.classList.add('is-mobile');
      }

    // Анимация для страницы
    if (document.querySelector('.has-anim')) {
      require.ensure([], (require) => {
        const AOS = require('aos');
        AOS.init({
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100,
        });
      });
    }
    // Навигация
    require.ensure([], (require) => {
      const Nav = require('../blocks/header/menu/index').default;
      Nav.init();
    });

    // Отложенная подгрузка изображений
    const Images = document.querySelectorAll('.js-lazy');
    if (Images.length) {
      require.ensure([], (require) => {
        const Lazy = require('./components/LazyLoad').default;
        Lazy.init();
      });
    }

    Application.initFancybox();
  }

  /**
   * Подключение fancybox
   */
  static initFancybox() {
    const fancy = document.querySelectorAll('.js-fancy') || [];
    if (fancy.length) {
      require.ensure([], (require) => {
        require('./vendors/fancybox/jquery.fancybox.pack');
        require('./vendors/fancybox/jquery.fancybox.css');
        $('.js-fancy').fancybox();
      });
    }
  }
}

export default new Application();
