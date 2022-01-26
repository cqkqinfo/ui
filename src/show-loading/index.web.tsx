import { Toast } from 'antd-mobile';

export default ({ title } = {} as WechatMiniprogram.ShowLoadingOption) => {
  Toast.show({
    icon: 'loading',
    content: title,
    duration: 9999999,
  });
  return Promise.resolve();
};
