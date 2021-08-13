// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImportCDNJS from 'import-cdn-js';
import { envVersion } from '../get-version';
import './index.less';

export default (
  showDebug = ['develop', 'trial'].includes(envVersion) ||
    window.location.hostname === '122.9.36.145' ||
    window.location.href.includes('isDebug=true'),
) => {
  if (showDebug) {
    ImportCDNJS('//cdn.bootcss.com/eruda/1.4.4/eruda.min.js', 'eruda').then(
      (eruda: any) => {
        eruda.init();
      },
    );
  }
};
