import { setEnableDebug } from 'remax/wechat';
import getVersion from '../get-version';

export default () => {
  if (['develop', 'trial'].includes(getVersion())) {
    setEnableDebug({ enableDebug: true });
  }
};
