import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import '../style/index.scss';

console.log(
  '%c Hello from /scripts/script.js ',
  'background: yellow; border: 1px solid #fff'
);

OfflinePluginRuntime.install();
