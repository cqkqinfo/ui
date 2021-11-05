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
  /**
   * 设置二维码回调
   */
  onSetSrc?: (src: string) => void;
  /**
   * 长按保存
   */
  longTapSave?: boolean;
  /**
   * 点击显示弹窗
   */
  showModal?: boolean;
  /**
   * 弹窗标题
   */
  modalTitle?: React.ReactNode;
}
