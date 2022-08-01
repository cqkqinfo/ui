import { previewImage, getFileSystemManager } from 'remax/wechat';

export type Options = WechatMiniprogram.PreviewImageOption;
export default async (options: Options) => {
  options.urls.forEach((url, index) => {
    if (!/^(http)/.test(url)) {
      const imgPath = `${wx.env.USER_DATA_PATH}/${+new Date()}.png`;
      const { writeFileSync } = getFileSystemManager();
      writeFileSync(
        imgPath,
        url.replace(/^data:image\/\w+;base64,/, ''),
        'base64',
      );
      options.urls[index] = imgPath;
    }
  });
  return previewImage(options);
};
