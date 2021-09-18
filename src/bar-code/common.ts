import { ViewProps } from 'remax/one';

export default interface BarCodeProps extends ViewProps {
  /**
   * 条形码内容
   */
  content: string;
  width?: number;
  height?: number;
}
