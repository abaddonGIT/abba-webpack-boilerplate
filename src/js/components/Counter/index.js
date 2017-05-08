/**
 * Created by abaddon on 08.05.2017.
 * Компонент для изменения кол-ва
 */
import './style.less';

class Counter {
    constructor() {
        this.items = [];
    }

    init(counters) {
        this.items = counters;
        for (let i = 0, ln = this.items.length; i < ln; i++) {
            const item = this.items[i], up = item.querySelector('.js-up'),
                down = item.querySelector('.js-down');

            up.addEventListener('click', this._upHandler, false);
            down.addEventListener('click', this._downHandler, false);
        }
    }

    /**
     * инкремент
     * @param e
     * @private
     */
    _upHandler = (e) => {
        const item = e.currentTarget, input = item.parentNode.querySelector('input');
        input.value = +input.value + 1;
    };

    /**
     * Дикремент
     * @param e
     * @private
     */
    _downHandler = (e) => {
        const item = e.currentTarget, input = item.parentNode.querySelector('input');
        input.value = +input.value === 1 ? +input.value : +input.value - 1;
    };
}

export default new Counter();