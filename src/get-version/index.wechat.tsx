import { getAccountInfoSync } from 'remax/wechat';

export const {
  miniProgram: { version, envVersion },
} = getAccountInfoSync();

export default `${envVersion}@${version}`;
