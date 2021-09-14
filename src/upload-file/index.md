---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## uploadFile 上传文件

上传文件

```tsx
import React from 'react';
import {
  showLoading,
  Button,
  Space,
  PartTitle,
  selectFiles,
  uploadFile,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() => {
        selectFiles({}).then(data =>
          uploadFile({
            url: 'test.com',
            filePath: data[0],
            name: 'file',
            formData: {
              key: 'test',
              policy: 'test',
              callback: 'test',
              signature: 'test',
              OSSAccessKeyId: 'test',
            },
          }),
        );
      }}
      type={'priary'}
    >
      上传
    </Button>
  </Space>
);
```

<API></API>
