import { confirm, alert } from 'remax/ali';

const fn = ({
  title = '提示',
  cancelText = '取消',
  confirmText = '确定',
  showCancel = true,
  content = undefined,
}) => {
  if (showCancel) {
    return confirm({
      title,
      content,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText,
    });
  }
  return alert({
    title,
    content,
    buttonText: confirmText,
  });
};

export default fn;
