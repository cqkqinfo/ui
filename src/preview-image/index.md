---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
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
      type={'primary'}
    >
      显示
    </Button>
  </Space>
);
```

<API></API>
