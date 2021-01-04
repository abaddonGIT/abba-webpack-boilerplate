const fontSize = 26
const lineHeight = 1.4
const linesToShow = 2

const style = `
  .collapsed-text {
        display: block; /* Fallback for non-webkit */
        display: -webkit-box;
        height: ${fontSize * lineHeight * linesToShow};
        margin: 0 auto;
        font-size: ${fontSize};
        line-height: ${lineHeight};
        -webkit-line-clamp: ${linesToShow};
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const template = `
  <style>
    ${style}
  </style>  
  <div class="collapsed-text"></div>
`

export default template
