---
nav:
  title: 组件
  path: /components
group:
  title: 工具
  path: /utils
---

## login 登录

登录接口，`web`端会进行跳转授权获取`openid`，小程序端会直接调用`login`接口

```ts
import React from 'react';
import { login } from '@kqinfo/ui';

login({
  /**
   * 医院code，默认会使用凯桥信息的
   */
  code: '',
}).then(
  ({
    /**
     * 小程序上会返回小程序login的code
     */
    code,
    /**
     * web上的体验版或者正式版会返回openId，开发版会返回undefined，可以设置一个默认开发用的openId
     */
    openId,
  }) => {},
);
```

<API></API>
