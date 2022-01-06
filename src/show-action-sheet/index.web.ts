import { ActionSheet } from 'antd-mobile';

export default ({ itemList }: WechatMiniprogram.ShowActionSheetOption) =>
  new Promise((resolve, reject) =>
    ActionSheet.showActionSheetWithOptions(
      { options: [...itemList, '取消'], cancelButtonIndex: itemList.length },
      index => {
        if (index !== itemList.length) {
          resolve({ tapIndex: index });
        }
      },
    ),
  );
