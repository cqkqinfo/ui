import { getAccountInfoSync } from 'remax/wechat';

const {
  miniProgram: { version, envVersion },
} = getAccountInfoSync();

export default `${envVersion}@${version}`;
