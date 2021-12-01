import { previewImage } from 'remax/wechat';

export type Options = WechatMiniprogram.PreviewImageOption;
export default (options: Options) => previewImage(options);
