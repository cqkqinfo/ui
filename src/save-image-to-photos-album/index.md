---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## saveImageToPhotosAlbum 保存图片到相册

保存图片到相册

```tsx
import React from 'react';
import {
  Button,
  Space,
  PartTitle,
  saveImageToPhotosAlbum,
  Image,
} from '@kqinfo/ui';
import logo from './logo.png';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Image src={logo} style={{ width: 100, height: 100 }} />
    <Button
      onTap={() => {
        saveImageToPhotosAlbum({
          filePath: logo,
          fileName: 'logo.png',
        }).then(data => alert('保存成功'));
      }}
      type={'primary'}
    >
      保存
    </Button>
  </Space>
);
```

<API></API>
