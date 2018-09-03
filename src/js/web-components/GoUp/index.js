/**
 * Created by abaddon on 02.09.2018.
 */
import templateHtml from './template';
const template = document.createElement('template');
template.innerHTML = templateHtml;

class GoUp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.link = this.shadowRoot.querySelector('.goUp');
    this.angle = this.shadowRoot.querySelector('span');
    this.config = Object.assign({
      horizontal: 100,
      vertical: 100,
      bottom: true,
      right: true,
      line: '#fff',
      offset: 100,
      bg: 'rgba(0,0,0,0.5)'
    }, this.dataset);
    this._setInlineStyle();
  }

  connectedCallback() {
    this.addEventListener('click', this._clickHandler, false);
    window.addEventListener('scroll', this._scrollHandle, false);
    this._scrollHandle();
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._clickHandler, false);
    window.removeEventListener('scroll', this._scrollHandle, false);
  }

  /**
   * Прописываем стили для элемента
   * @private
   */
  _setInlineStyle = () => {
    this.link.style.cssText += `
      background: ${this.config.bg};
      ${this.config.right ? `right: ${this.config.horizontal}px;` : `left: ${this.config.horizontal}px;`}
      ${this.config.bottom ? `bottom: ${this.config.vertical}px;` : `top: ${this.config.vertical}px;`}
    `;
    this.angle.style.cssText += `
      border-top-color: ${this.config.line};
      border-right-color: ${this.config.line};
    `;
  };

  /**
   * Скрол страницы
   * @private
   */
  _scrollHandle = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > this.config.offset) {
      this.link.classList.add('is-show');
    } else {
      this.link.classList.remove('is-show');
    }
  };

  /**
   * Обработка нажатия на компонент
   * @param e
   * @private
   */
  _clickHandler = (e) => {
    e.preventDefault();
    if (typeof jQuery === 'function') {
      jQuery('html,body').animate({ scrollTop: 0 }, 500);
    } else {
      window.scrollTo(0, 0);
    }
  };
}

window.customElements.define('go-up', GoUp);