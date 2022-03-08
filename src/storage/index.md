---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## storage 跨平台存储器

支持格式化 key、设置过期时间、ts 类型支持。

不再需要进行 JSON.stringify 和 JSON.parse 来解析数据

```tsx
import React from 'react';
import { storage, Button, Space } from '@kqinfo/ui';

/** 其中键为key类型，值为data的类型 */
type DataType = {
  test: number;
  bar: { foo: string };
};

//简单用法
const store = storage.create<DataType>();

//全局可选配置
const store1 = storage.create<DataType>({
  //可以指定特定时间，如：2024-12-24 14:00过期
  expireAt: '2024-12-24 14:00',
  //可以从当前日期起设置过期天数秒数等，如 60秒后过期或者3天后过期
  expire: 60, //or [3, "day"];
  //格式化key值，如原始key为 name, 实际存储值为before-name-after
  formatKey: v => `before-${v}-after`,
  //异常处理器
  errorHandler: err => console.log(err),
});

// set 时可选配置
//或者在设置单个key值设置值， 优先顺序为首先是：单个> 全局， 然后再是 expireAt > expire
store1.set('test', 1, {
  //2024-12-24 14:00过期
  expireAt: '2024-12-24 14:00',
  //设置成功key后开始， 36000毫秒后过期 或者 3天后过期
  // expire: 36000 or ;
  //只能读取一次，读取一次后key对应的数据失效自动删除
  //once: true
});

export default () => {
  const count = React.useRef(1);

  return (
    <Space vertical size={'10px'}>
      <Button
        onTap={() => {
          store.set('test', count.current++);
          alert('设置成功');
        }}
        type={'primary'}
      >
        数据存储
      </Button>
      <Button
        onTap={() => {
          store.set('test', count.current++, {
            expire: [10, 's'],
          });
          alert('设置成功, 过期时间10s');
        }}
        type={'primary'}
      >
        数据存储，过期时间10秒
      </Button>
      <Button
        onTap={() => {
          store.set('test', count.current++, {
            once: true,
          });
          alert('设置成功, 只能获取一次');
        }}
        type={'primary'}
      >
        数据存储，只能获取一次
      </Button>
      <Button
        onTap={() => {
          alert(store.get('test'));
        }}
        type={'primary'}
      >
        数据获取
      </Button>
      <Button
        onTap={() => {
          store.del('test');
        }}
        type={'primary'}
      >
        数据清除单个key
      </Button>
      <Button
        onTap={() => {
          store.clear();
        }}
        type={'primary'}
      >
        数据清除所有key
      </Button>
    </Space>
  );
};
```
