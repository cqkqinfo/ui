import { data } from '../config-provider';
import screenWidth from '../screen-width';

export default (px?: number) => {
  if (!px) return px;
  return ((screenWidth / data.viewportWidth) * px) / 2;
};
