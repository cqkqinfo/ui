import selectFiles from '../select-files';

interface ChooseImageOption {
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: { errMsg: string }) => void;
  /** 最多可以选择的图片张数 */
  count?: number;
  /** 接口调用失败的回调函数 */
  fail?: (res: { errMsg: string }) => void;
  /** 所选的图片的尺寸
   *
   * 可选值：
   * - 'original': 原图;
   * - 'compressed': 压缩图; */
  sizeType?: Array<'original' | 'compressed'>;
  /** 选择图片的来源
   *
   * 可选值：
   * - 'album': 从相册选图;
   * - 'camera': 使用相机; */
  sourceType?: Array<'album' | 'camera'>;
  /** 接口调用成功的回调函数 */
  success?: (res: { errMsg: string }) => void;
}

export default ({ count }: ChooseImageOption = {}) =>
  selectFiles({ multiple: count !== 1 }).then(tempFiles => ({
    tempFiles,
    tempFilePaths: tempFiles,
  }));
