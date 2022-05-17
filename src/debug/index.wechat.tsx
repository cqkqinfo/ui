import { setEnableDebug } from 'remax/wechat';
import getVersion from '../get-version';

export default () => {
  getVersion().then(env => {
    if (['develop', 'trial'].includes(env)) {
      setEnableDebug({ enableDebug: true });
    }
  });
};
