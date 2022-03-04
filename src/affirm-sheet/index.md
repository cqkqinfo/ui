---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## AffirmSheet 确认弹出层

确认弹出层

```tsx
import React, { useRef, useState } from 'react';
import {
  Space,
  AffirmSheet,
  PartTitle,
  Button,
  showToast,
  ColorText,
} from '@kqinfo/ui';

export default () => {
  return (
    <Space vertical size={'10px'}>
      <AffirmSheet />
      <PartTitle>一般用法</PartTitle>
      <Button
        type={'primary'}
        onTap={() => {
          AffirmSheet.show({
            title: '挂号须知',
            cancelText: '取消关闭',
            okText: '确定挂号',
            content: (
              <Space vertical size={70}>
                <span style={{ lineHeight: 1.2 }}>
                  <ColorText color={'#D95E38'}>三天内有发热</ColorText>
                  的患者，如未做新冠核酸检测，请先预约普通发热门诊就诊
                </span>
                <ColorText color={'#333333'}>每日号源更新时间：</ColorText>
                <Space vertical size={35}>
                  <ColorText color={'#D95E38'}>预约号每天晚上19:00 </ColorText>
                  <ColorText color={'#D95E38'}>当天号每天早上7:00 </ColorText>
                </Space>
              </Space>
            ),
          })
            .then(() => showToast({ title: '确定' }))
            .catch(() => showToast({ title: '取消' }));
        }}
      >
        显示
      </Button>
    </Space>
  );
};
```

<API exports='["default", "showOptions"]'></API>
