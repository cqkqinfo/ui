import { saveImageToPhotosAlbum } from 'remax/wechat';

export type Options = WechatMiniprogram.SaveImageToPhotosAlbumOption & {
  fileName?: string;
};

export default (options: Options) => saveImageToPhotosAlbum(options);
