import { Modal } from 'antd-mobile';

const fn = ({
  title = '提示',
  cancelText = '取消',
  confirmText = '确定',
  showCancel = true,
  content = undefined,
}) =>
  new Promise((resolve, reject) => {
    const confirm = {
      text: confirmText,
      onPress: () => resolve({ confirm: true }),
    };
    const cancel = {
      text: cancelText,
      onPress: () => resolve({ confirm: false }),
    };
    Modal.alert(title, content, showCancel ? [cancel, confirm] : [confirm]);
  });

export default fn;
