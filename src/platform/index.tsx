import getPlatform from '../get-platform';

export interface Props {
  /**
   * 需要显示的平台
   */
  platform: ('web' | 'wechat' | 'ali' | 'toutiao' | 'native' | 'pc')[];
  children?: any;
}

export default ({ platform, children }: Props) => {
  return platform.includes(getPlatform) ? children : null;
};
