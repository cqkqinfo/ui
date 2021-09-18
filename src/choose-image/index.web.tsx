import selectFiles from '../select-files';

export default ({ count }: WechatMiniprogram.ChooseImageOption = {}) =>
  selectFiles({ multiple: count !== 1 }).then(tempFiles => ({
    tempFiles,
    tempFilePaths: tempFiles,
  }));
