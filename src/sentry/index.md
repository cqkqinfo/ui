---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## Sentry 错误监控

错误监控

```ts
import React from 'react';
import { Sentry } from '@kqinfo/ui';

Sentry.init({
  /**
   * 默认会有一个dsn，需要单独监控需要再申请一个dsn
   */
  dsn: '',
});
```

<API></API>
