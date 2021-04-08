import { getSystemInfoSync } from 'remax/wechat';

const { screenWidth } = getSystemInfoSync();

export default screenWidth;
