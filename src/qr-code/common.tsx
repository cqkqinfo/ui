import { ImageProps } from 'remax/one';

export default interface QrCodeProps extends ImageProps {
  /**
   * 二维码内容
   */
  content: string;
}
