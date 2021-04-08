import screenWidth from '../screen-width';

export default (rpx: number) => {
  return ((screenWidth * 2) / 750) * rpx;
};
