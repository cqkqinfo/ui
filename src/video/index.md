---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Video 视频

轮播图

```tsx
import React, { useState } from 'react';
import { Video, Space, PartTitle, Button } from '@kqinfo/ui';

export default () => {
  const [current, setCurrent] = useState();
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <Video
        src={
          'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400'
        }
      />
    </Space>
  );
};
```

<API></API>
