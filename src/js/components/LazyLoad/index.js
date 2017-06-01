/**
 * Created by abaddon on 31.05.2017.
 */
"use strict";
class LazyLoad {
    constructor() {
        this.list = [];
    }

    init(list) {
        for (let i = 0, ln = list.length; i < ln; i++) {
            this.list.push(list[i]);
        }
        this.scrollHandler();
        $(window).scroll(this.scrollHandler);
    }

    /**
     * Обработка скрола страницы
     */
    scrollHandler = () => {
        for (let i = 0, ln = this.list.length; i < ln; i++) {
            const image = this.list[i];
            if (image && !image.isLoad) {
                if (LazyLoad.checkElementInViewport(image)) {
                    this.loadImage(image, i).then((i) => {
                        this.list[i].isLoad = true;
                    });
                }
            } else {
                this.list.splice(i, 1);
            }
        }
    };

    /**
     * Проверяет находится ли изображение в области просмотра
     * @param image
     */
    static checkElementInViewport(image) {
        const rect = image.getBoundingClientRect();
        return (
            rect.top >= 0
            && rect.left >= 0
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    /**
     * Подгрузка изображения
     * @param image
     * @param index
     */
    loadImage(image, index) {
        return new Promise((resolve, reject) => {
            const img = new Image(), src = image.getAttribute('data-img'), type = image.getAttribute('data-type');
            img.onload = () => {
                if (!!image.parent) {
                    if (type === 'bg') {
                        image.parentNode.classList.add('is-load');
                        image.parentNode.style.cssText += `background-image: url(${src})`;
                    } else {
                        img.classList.add('is-load');
                        image.parent.replaceChild(img);
                    }
                } else {
                    if (type === 'bg') {
                        image.parentNode.classList.add('is-load');
                        image.parentNode.style.cssText += `background-image: url(${src})`;
                    } else {
                        image.classList.add('is-load');
                        image.src = src;
                    }
                }
                resolve(index);
            };
            img.onerror = () => {
                reject(index);
            };
            img.src = src;
        });
    }
}

export default new LazyLoad();