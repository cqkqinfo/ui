---
nav:
  title: Components
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Step

步骤条

```tsx
import React from 'react';
import { Step, Space, PartTitle } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => (
  <Space vertical size={10}>
    <PartTitle>基本用法</PartTitle>
    <Step items={['步骤1', '步骤2', '步骤3']} current={2} />
    <PartTitle>自定义样式</PartTitle>
    <Step
      items={[
        {
          icon: active => (
            <View
              style={{
                color: 'red',
                background: '#fff',
                height: 30,
              }}
            >
              步骤1
            </View>
          ),
          text: () => <View>步骤1</View>,
        },
        '步骤2',
        '步骤3',
      ]}
      current={2}
    />
  </Space>
);
```

<API></API>
