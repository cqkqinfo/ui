import { ActionSheet } from 'antd-mobile';

export default ({ itemList }: WechatMiniprogram.ShowActionSheetOption) =>
  new Promise((resolve, reject) => {
    const sheet = ActionSheet.show({
      actions: [...itemList].map(text => ({ text, key: text })),
      cancelText: '取消',
      onAction: (_, index) => {
        resolve({ tapIndex: index });
        sheet.close();
      },
    });
  });
