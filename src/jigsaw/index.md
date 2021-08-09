---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  path: /data-entry
---

## Jigsaw 拼图验证

拼图验证

```tsx
import React, { useState } from 'react';
import { Space, Jigsaw, Button, PartTitle, showToast } from '@kqinfo/ui';

export default () => {
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>一般用法</PartTitle>
      <Jigsaw
        imgs={[
          require('./imgs/1.jpg'),
          require('./imgs/2.jpg'),
          require('./imgs/3.jpg'),
          require('./imgs/4.jpg'),
          require('./imgs/5.jpg'),
          require('./imgs/6.jpg'),
          require('./imgs/7.jpg'),
          require('./imgs/8.jpg'),
          require('./imgs/9.jpg'),
        ]}
        onSuccess={() => showToast({ title: '成功' })}
        onFail={() => showToast({ title: '失败', icon: 'none' })}
      />
    </Space>
  );
};
```

<API></API>
