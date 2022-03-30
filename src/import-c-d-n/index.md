---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## importCDN 引入 CDN

全平台引入 CDN

```tsx
import React, { useState, useEffect } from 'react';
import { Space, importCDN } from '@kqinfo/ui';

export default () => {
  const [moment, setMoment] = useState<any>();
  useEffect(() => {
    importCDN(
      'https://cdn.bootcdn.net/ajax/libs/moment.js/2.18.1/moment.min.js',
      'moment',
    ).then(setMoment);
  }, []);
  console.log(moment);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      {moment?.format('YYYY-MM-DD HH:mm:ss')}
    </Space>
  );
};
```
