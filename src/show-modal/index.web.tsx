import { Dialog } from 'antd-mobile';

let modal: any;

const fn = ({
  title = '提示',
  cancelText = '取消',
  confirmText = '确定',
  showCancel = true,
  content = undefined,
}) =>
  new Promise((resolve, reject) => {
    modal?.close?.();
    modal = Dialog[showCancel ? 'confirm' : 'alert']({
      title,
      content,
      cancelText,
      confirmText,
      onCancel: () => resolve({ confirm: false }),
      onConfirm: () => resolve({ confirm: false }),
    });
  });

export default fn;
