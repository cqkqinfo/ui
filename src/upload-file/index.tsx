import { uploadFile } from 'remax/wechat';

export interface IUploadFileType {
  fileType?: 'image' | 'video' | 'audio';
}

export default (
  options: WechatMiniprogram.UploadFileOption & IUploadFileType,
) => uploadFile(options);
