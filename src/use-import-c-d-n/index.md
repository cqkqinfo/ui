---
nav:
  title: 工具
  path: /utils
group:
  title: hooks
  path: /hooks
---

## useImportCDN 使用 CDN

使用 CDN

```tsx
import React from 'react';
import { Space, useImportCDN } from '@kqinfo/ui';

export default () => {
  const moment = useImportCDN(
    'https://cdn.bootcdn.net/ajax/libs/moment.js/2.18.1/moment.min.js',
    'moment',
  );
  console.log(moment);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      {moment?.format('YYYY-MM-DD HH:mm:ss')}
    </Space>
  );
};
```

<API></API>
