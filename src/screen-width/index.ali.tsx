import { getSystemInfoSync } from 'remax/ali';

const { windowWidth } = getSystemInfoSync();

export default windowWidth * 2;
