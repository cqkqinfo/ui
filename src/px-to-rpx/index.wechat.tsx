import screenWidth from '../screen-width';

export default (px?: number) => {
  if (!px) return px;
  return ((screenWidth / 375) * px) / 2;
};
