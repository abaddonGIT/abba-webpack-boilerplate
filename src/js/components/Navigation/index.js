/**
 * Created by abaddon on 19.04.2017.
 */
import './style.less';

class Nav {
    constructor() {
        this.toggle = document.querySelector(".js-toggle");
        this.menu = document.querySelector(".js-menu");
        this.searchToggle = document.querySelector(".js-search");
    }

    init() {
        if (this.toggle) {
            this.toggle.addEventListener("click", this._toggleHandler, false);
            this.searchToggle.addEventListener("click", this._toggleSearch, false);
        }
    }

    /**
     * Обработчик отображения строки поиска
     * @param e
     * @private
     */
    _toggleSearch = (e) => {
        const el = e.currentTarget;
        if (el.classList.contains('is-open')) {
            el.classList.remove('is-open');
        } else {
            el.classList.add('is-open');
        }
        e.preventDefault();
    };

    /**
     * Обработчик отображения плашки меню
     * @param e
     * @private
     */
    _toggleHandler = (e) => {
        const item = e.currentTarget;
        if (item.classList.contains("is-open")) {
            item.classList.remove("is-open");
            $(this.menu).stop(1, 1).slideUp(500);
        } else {
            item.classList.add("is-open");
            $(this.menu).stop(1, 1).slideDown(500);
        }
    }
}

export default new Nav();