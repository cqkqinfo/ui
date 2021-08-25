---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  path: /data-entry
---

## UploadImg 图片上传组件

全平台图片上传组件

```tsx
import React, { useState } from 'react';
import { UploadImg, showToast, Space, PartTitle } from '@kqinfo/ui';

export default () => {
  const [value, setValue] = useState<string[]>([
    'https://z3.ax1x.com/2021/04/12/cBYfTU.png',
    'https://z3.ax1x.com/2021/04/12/cBY4kF.png',
    'https://z3.ax1x.com/2021/04/13/cruEHH.png',
  ]);

  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <UploadImg
        value={value}
        length={5}
        multiple
        maxSize={1 * 1024 * 1024}
        onMaxError={() => {
          showToast({ title: '文件过大' });
        }}
        uploadFn={async file => {
          return 'https://z3.ax1x.com/2021/04/12/cBYWwT.png';
        }}
        onChange={value => {
          setValue(value);
        }}
      />
    </Space>
  );
};
```

<API></API>
