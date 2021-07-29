import { Toast } from 'antd-mobile';

export default ({ title } = {} as WechatMiniprogram.ShowLoadingOption) => {
  Toast.loading(title, 9999999);
  return Promise.resolve();
};
