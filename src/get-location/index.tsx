import { getLocation } from 'remax/wechat';

export default (options: WechatMiniprogram.GetLocationOption) =>
  getLocation(options);
