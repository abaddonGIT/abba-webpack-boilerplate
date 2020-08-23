import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// @ts-ignore
import svg4everybody from 'svg4everybody';

import Site from './Site';

import '../style/index.scss';

console.log(
  '%cHello!!! If you have suggestions for this boilerplate please do PR ',
  'background: lightgreen; border: 1px solid #deepskyblue; color: #000'
);

OfflinePluginRuntime.install();
svg4everybody();

$(() => {
  const site = new Site();
  site.init();
});
