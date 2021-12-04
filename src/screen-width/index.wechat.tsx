import { getSystemInfoSync } from 'remax/wechat';

const { windowWidth } = getSystemInfoSync();

export default windowWidth;
