import { uploadFile } from 'remax/wechat';

export default (options: WechatMiniprogram.UploadFileOption) =>
  uploadFile(options);
