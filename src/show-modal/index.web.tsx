import { Dialog } from 'antd-mobile';

const fn = ({
  title = '提示',
  cancelText = '取消',
  confirmText = '确定',
  showCancel = true,
  content = undefined,
}) =>
  new Promise((resolve, reject) => {
    return Dialog[showCancel ? 'confirm' : 'alert']({
      title,
      content,
      cancelText,
      confirmText,
      onCancel: () => resolve({ confirm: false }),
      onConfirm: () => resolve({ confirm: true }),
    });
  });

export default fn;
