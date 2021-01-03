console.log(
  '%cHello!!! If you have suggestions for this boilerplate please do PR ',
  'background: lightgreen; border: 1px solid #deepskyblue; color: #000'
)

// Test import of a JavaScript function
import { example } from './js/example'

// Test import of an asset
import webpackLogo from './images/webpack-logo.svg'

// Test import of styles
import './styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()
