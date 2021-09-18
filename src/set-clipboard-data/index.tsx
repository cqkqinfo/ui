import { setClipboardData } from 'remax/wechat';

export type Options = WechatMiniprogram.SetClipboardDataOption;
export default (options?: Options) => setClipboardData(options);
