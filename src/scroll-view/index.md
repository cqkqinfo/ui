---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## ScrollView 滚动视图

滚动视图

```tsx
import React, { useState } from 'react';
import { ScrollView, Space, PartTitle, Button } from '@kqinfo/ui';

export default () => {
  const [scrollIntoView, setScrollIntoView] = useState(new Date() % 50);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <ScrollView scrollX>
        <Space size={10}>
          {new Array(50).fill(0).map((_, i) => (
            <Space key={i} style={{ width: 50, height: 50, background: 'red' }}>
              {i}
            </Space>
          ))}
        </Space>
      </ScrollView>
      <PartTitle>滚动到指定地方</PartTitle>
      <ScrollView
        scrollX
        scrollIntoView={`id${scrollIntoView}`}
        scrollWithAnimation
      >
        <Space size={10}>
          {new Array(50).fill(0).map((_, i) => (
            <Space
              id={`id${i}`}
              key={i}
              style={{ width: 50, height: 50, background: 'red' }}
            >
              {i}
            </Space>
          ))}
        </Space>
      </ScrollView>
      <Button
        onTap={() => {
          setScrollIntoView(new Date() % 50);
        }}
      >
        滚动到 {scrollIntoView}
      </Button>
    </Space>
  );
};
```

<API></API>
