---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## switchVariable 切换变量

简化版 switch case 根据不同变量返回不同变量，用于多环境、多状态，多版本的值判断

### 多维度状态判断

```tsx
import React from 'react';
import { switchVariable, Button, Space, PartTitle } from '@kqinfo/ui';

const getDeliveryStatus = switchVariable({
  default: '待发货',
  1: '待寄出',
  2: '待揽收',
  '3|4': '已完成', // 正则表达式
});

const getStatusText = (orderStatus?: string, deliveryStatus?: string) =>
  switchVariable({
    default: '待付款',
    1: '待审核',
    2: getDeliveryStatus(deliveryStatus),
  })(orderStatus);

export default () => {
  return (
    <Space vertical size={'10px'}>
      <PartTitle>待审核</PartTitle>
      <Button>{getStatusText('1')}</Button>
      <PartTitle>待寄出</PartTitle>
      <Button>{getStatusText('2', '1')}</Button>
      <PartTitle>已完成</PartTitle>
      <Button>{getStatusText('2', '3')}</Button>
    </Space>
  );
};
```

### 返回不同变量

```tsx
import React from 'react';
import { switchVariable, Button, Space, PartTitle } from '@kqinfo/ui';

const getValue = switchVariable({
  default: 1,
  test: 2,
  prodaction: 3,
});

const env = 'test';

console.log(getValue(env)); // test: 2

const env2 = 'test2';

console.log(getValue(env2)); // 默认值：1

export default () => {
  return (
    <Space vertical size={'10px'}>
      <Button onTap={() => alert(getValue(env))}>test</Button>
      <Button onTap={() => alert(getValue(env2))}>test2</Button>
    </Space>
  );
};
```

### 返回对象

```tsx
import React from 'react';
import { switchVariable, Button, Space, PartTitle } from '@kqinfo/ui';

const getObj = switchVariable({
  default: { a: 1 },
  test: { b: 2 },
  prodaction: { c: 3 },
});

const env = 'test';

console.log(getObj(env)); // 合并值：{a:1,b:2}

const env2 = 'test2';

console.log(getObj(env2)); // 默认值：{a:1}

export default () => {
  return (
    <Space vertical size={'10px'}>
      <Button onTap={() => alert(JSON.stringify(getObj(env)))}>test</Button>
      <Button onTap={() => alert(JSON.stringify(getObj(env2)))}>test2</Button>
    </Space>
  );
};
```

<API exports='["Obj"]'></API>
