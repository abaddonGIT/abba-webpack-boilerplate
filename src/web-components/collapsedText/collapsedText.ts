import templateHtml from './template'

const template = document.createElement('template')

class CollapsedText extends HTMLElement {
  constructor() {
    super()
    template.innerHTML = templateHtml
    const content = this.innerHTML

    this.innerHTML = ''
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this.shadowRoot.querySelector('.collapsed-text').innerHTML = content
  }
}

export default CollapsedText
