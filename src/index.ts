import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import svg4everybody from 'svg4everybody'

import './js/svg-icons'
import './web-components'

console.log(
  '%cHello!!! If you have suggestions for this boilerplate please do PR ',
  'background: lightgreen; border: 1px solid #deepskyblue; color: #000'
)

OfflinePluginRuntime.install()
svg4everybody()

// Test import of styles
import './styles/index.scss'

import Site from './js/Site'

$(() => {
  const site = new Site()
  site.init()
})
