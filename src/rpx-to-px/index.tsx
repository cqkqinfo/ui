import screenWidth from '../screen-width';
import { data } from '../config-provider';

export default (rpx: number) => {
  return (
    ((screenWidth / data.viewportWidth) * rpx) /
    (process.env.REMAX_PLATFORM === 'wechat'
      ? screenWidth / data.viewportWidth
      : 1)
  );
};
