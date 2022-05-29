import screenWidth from '../screen-width';
import { config } from '../rpx-to-px';

export default (px?: number) => {
  if (!px) return px;
  return ((screenWidth / config.viewportWidth) * px) / 2;
};
