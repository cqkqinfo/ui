---
nav:
  title: 组件
  path: /components
group:
  title: 数据录入
  path: /data-entry
---

## Picker 选择器

选择器

城市数据需要在小程序 `request` 域名里加上 `kq-static.oss-cn-beijing.aliyuncs.com`

```tsx
import React, { useEffect, useState } from 'react';
import { Picker, addressOptions, PartTitle, Space, Button } from '@kqinfo/ui';

export default () => {
  return (
    <Picker cols={3} data={addressOptions} onChange={console.log}>
      <div>显示</div>
    </Picker>
  );
};
```

<API exports='["PickerData", "default"]'></API>
