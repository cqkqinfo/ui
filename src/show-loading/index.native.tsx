import { Toast } from '@ant-design/react-native';

export default ({ title } = {} as WechatMiniprogram.ShowLoadingOption) => {
  Toast.loading({
    content: title,
    duration: 9999999,
  });
  return Promise.resolve();
};
