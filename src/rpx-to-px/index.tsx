import screenWidth from '../screen-width';

export const config = {
  /**
   * 设计图宽度
   * @default 750
   */
  viewportWidth: 750,
};

export default (rpx: number) => {
  return (
    ((screenWidth / config.viewportWidth) * rpx) /
    (process.env.REMAX_PLATFORM === 'wechat'
      ? screenWidth / config.viewportWidth
      : 1)
  );
};
