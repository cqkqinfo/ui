import screenWidth from '../screen-width';

export default (rpx: number) => {
  return (screenWidth / 750) * rpx;
};
