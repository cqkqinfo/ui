import { Toast } from '@ant-design/react-native';

export default () => {
  Toast.removeAll();
  return Promise.resolve();
};
