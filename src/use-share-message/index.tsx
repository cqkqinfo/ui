import { usePageEvent } from 'remax/macro';

export default (
  option: WechatMiniprogram.Page.ICustomShareContent & {
    /**
     * 分享描述，web上生效
     */
    desc?: string;
  },
) => {
  usePageEvent('onShareAppMessage', () => option);
};
