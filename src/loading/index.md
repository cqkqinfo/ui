---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## Loading 加载中

加载中

```tsx
import React, { useState } from 'react';
import { Space, Loading, Button, PartTitle } from '@kqinfo/ui';

export default () => {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  return (
    <Space vertical size={'10px'} alignItems={'flex-start'}>
      <PartTitle>全屏Loading</PartTitle>
      {loading1 && <Loading />}
      <Button
        type={'priarmy'}
        onTap={() => {
          setLoading1(true);
          setTimeout(() => {
            setLoading1(false);
          }, 5000);
        }}
      >
        显示全屏 Loading
      </Button>
      <PartTitle>顶部Loading</PartTitle>
      {loading2 && <Loading type={'top'} />}
      <Button
        type={'priarmy'}
        onTap={() => {
          setLoading2(true);
          setTimeout(() => {
            setLoading2(false);
          }, 5000);
        }}
      >
        显示顶部 Loading
      </Button>
      <PartTitle>行内加载</PartTitle>
      <Loading type={'inline'} />
    </Space>
  );
};
```

<API></API>
