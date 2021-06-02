import { ImageProps } from 'remax/one';

export default interface QrCodeProps extends ImageProps {
  /**
   * 二维码内容
   */
  content: string;
  /**
   * 二维码码的颜色
   */
  darkColor?: string;
  /**
   * 二维码背景颜色
   */
  lightColor?: string;
}
