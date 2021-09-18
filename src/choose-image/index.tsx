import { chooseImage } from 'remax/wechat';

export type Options = WechatMiniprogram.ChooseImageOption;
export default (options?: Options) => chooseImage(options);
