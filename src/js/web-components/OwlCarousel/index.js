/**
 * Created by abaddon on 10.10.2018.
 */
import templateHtml from './template';
const template = document.createElement('template');
template.innerHTML = templateHtml;
class OwlCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    // $(this.owl).owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     600: {
    //       items: 3
    //     },
    //     1000: {
    //       items: 5
    //     }
    //   }
    // });
  }
}

class OwlConfig extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.config = {};
    try {
      this.config = JSON.parse(this.innerHTML.replace(/\n/g, '').replace(/ /g,''));
    } catch (e) {
      console.log('ошибка при разборе конфигурации!');
    }
    this.innerHTML = `<script type="text/javascript">const config = ${this.config};</script>`;
  }
}

const wrapHtml = `
  <style>
    @import "js/vendors/owl/owl.carousel.min.css";
  </style> 
  <div class="owl-carousel js-owl-init"></div>
`;
const wrapTemplate = document.createElement('template');
wrapTemplate.innerHTML = wrapHtml;
class OwlWrap extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(wrapTemplate.content.cloneNode(true));
    this.wrap = this.shadowRoot.querySelector('.js-owl-init');
    this.wrap.innerHTML = this.innerHTML;
  }

  connectedCallback() {
    if (typeof jQuery === 'function') {

    } else {
      this.shadowRoot.innerHTML = 'jQuery не подключена!';
    }
  }
}

window.customElements.define('owl-place', OwlCarousel);
window.customElements.define('owl-config', OwlConfig);
window.customElements.define('owl-wrap', OwlWrap);