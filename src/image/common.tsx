import { ImageProps } from 'remax/one';
import commonImg from '../common-img';

export interface Props extends ImageProps {
  /**
   * 占位图片
   */
  placeholder?: string | false;
  /**
   * 支持预览
   * @default true
   */
  preview?: boolean;
  /**
   * 图片懒加载，只在小程序有效
   */
  lazyLoad?: boolean;
}

export const useProps = ({
  placeholder = commonImg.zwt,
  src = placeholder ? placeholder : '',
  preview = false,
  ...props
}: Props) => {
  return {
    placeholder,
    src,
    preview,
    ...props,
  };
};
