---
nav:
  title: 工具
  path: /utils
group:
  title: hooks
  path: /hooks
---

## useShareMessage 设置分享信息

设置分享信息，参考`wx.onShareAppMessage`，添加了 h5 的`desc`。

web 端使用前需要先调用[wxInit](/utils/one/wx-init)

```javascript
import React from 'react';
import { useShareMessage } from '@kqinfo/ui';

export default () => {
  useShareMessage({
    title: '标题',
    desc: '描述',
    imageUrl: 'http://xxx/xxx.png',
    path: '/pages/xxx/xxx',
  });
};
```
