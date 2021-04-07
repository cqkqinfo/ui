import { getSystemInfoSync } from 'remax/wechat';

export default (px: number) => {
  const { screenWidth } = getSystemInfoSync();
  return (750 / (screenWidth * 2)) * px * 2;
};
