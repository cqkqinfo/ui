import { getAccountInfoSync } from 'remax/wechat';

const {
  miniProgram: { envVersion },
} = getAccountInfoSync();

export default () => envVersion;
