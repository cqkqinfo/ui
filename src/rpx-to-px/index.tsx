import screenWidth from '../screen-width';

export default (rpx: number) => {
  return (
    ((screenWidth / 750) * rpx) /
    (process.env.REMAX_PLATFORM === 'wechat' ? screenWidth / 750 : 1)
  );
};
