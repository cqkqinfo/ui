---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## previewImage 图片预览

图片预览

```tsx
import React from 'react';
import { previewImage, Button, Space, PartTitle, CommonImg } from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() =>
        previewImage({
          urls: [
            CommonImg.calendar,
            CommonImg.doctor,
            CommonImg.doctor2,
            CommonImg.hospital,
          ],
        })
      }
      type={'priary'}
    >
      显示
    </Button>
  </Space>
);
```

<API></API>
