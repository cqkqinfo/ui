---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## OCR 图像识别

目前只支持身份证识别，识别后会返回身份证姓名和号码、地址、民族、性别等

```tsx
import React from 'react';
import {
  showLoading,
  Button,
  Space,
  PartTitle,
  showToast,
  OCR,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        OCR({ basicPlatformToken: '' })
          .then(({ name, no }) => console.log({ name, no }))
          .catch(() => showToast({ icon: 'none', title: '暂不能演示' }));
      }}
      type={'primary'}
    >
      身份证识别
    </Button>
  </Space>
);
```

<API></API>
