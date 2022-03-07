// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImportCDNJS from 'import-cdn-js';
import { envVersion } from '../get-version';

export default (showDebug = ['develop', 'trial'].includes(envVersion)) => {
  if (
    showDebug ||
    window.location.hostname === '122.9.36.145' ||
    window.location.href.includes('isDebug=true')
  ) {
    ImportCDNJS('//cdn.bootcss.com/eruda/2.4.1/eruda.min.js', 'eruda').then(
      (eruda: any) => {
        eruda.init();
        eruda.util.evalCss('#eruda * { user-select: text !important; }');
      },
    );
  }
};
