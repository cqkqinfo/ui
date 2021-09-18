---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Step 步骤条

步骤条

```tsx
import React from 'react';
import { Step, Space, PartTitle } from '@kqinfo/ui';
import { View } from 'remax/one';

export default () => (
  <Space vertical size={'10px'}>
    <PartTitle>基本用法</PartTitle>
    <Step items={['步骤1', '步骤2', '步骤3']} current={2} />
    <Step items={['步骤1', '步骤2', '步骤3']} current={2} type="dashed" />
    <PartTitle>自定义样式</PartTitle>
    <Step
      activeColor={'#fff'}
      items={[
        () => ({
          icon: (
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
          text: '步骤1',
        }),
        '步骤2',
        '步骤3',
      ]}
      current={1}
    />
  </Space>
);
```

<API></API>
