---
nav:
  title: 工具
  path: /utils
group:
  title: 统一平台
  path: /one
---

## wxInit 初始化微信

web 端会调用`wx.config`初始化微信，之后才能使用微信的功能。

```javascript
import React from 'react';
import { wxInit } from '@kqinfo/ui';

wxInit();
```

<API></API>
