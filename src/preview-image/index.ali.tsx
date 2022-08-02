import { previewImage } from 'remax/ali';

export type Options = my.IPreviewImageOptions;
export default async (options: Options) => {
  options.current = options.urls.findIndex(url => url === options.current + '');
  options.urls.forEach((url, index) => {
    if (!/^(http)/.test(url)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const imgPath = `${my.env.USER_DATA_PATH}/${+new Date()}.png`;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const { writeFileSync } = my.getFileSystemManager();
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
