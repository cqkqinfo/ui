import { setEnableDebug } from 'remax/wechat';
import { envVersion } from '../get-version';

export default () => {
  if (['develop', 'trial'].includes(envVersion)) {
    setEnableDebug({ enableDebug: true });
  }
};
