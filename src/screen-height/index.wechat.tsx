import { getSystemInfoSync } from 'remax/wechat';

const { windowHeight } = getSystemInfoSync();

export default windowHeight;
