---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## OpenWeapp 跳转小程序

跳转小程序，children 只支持行内样式

web 端跳转前需要使用微信 sdk 初始化，[相关文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_Open_Tag.html)

```tsx
import React from 'react';
import { Space, PartTitle, OpenWeapp } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <OpenWeapp
      onLaunch={() => alert('模拟成功')}
      path={'pages/index/index'}
      username={'gh_d9c1c80f9bfa'}
    >
      <View style={{ width: 100, height: 100, background: '#eee' }}>打开</View>
    </OpenWeapp>
  </Space>
);
```

<API></API>
