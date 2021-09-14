---
nav:
  title: 工具
  path: /utils
group:
  title: 业务工具
  path: /business
---

## showFrequentModal 显示频繁校验

显示频繁校验

```tsx
import React from 'react';
import {
  showFrequentModal,
  Button,
  Space,
  PartTitle,
  CommonImg,
  showToast,
} from '@kqinfo/ui';

export default () => (
  <Space vertical size={'10px'} alignItems={'flex-start'}>
    <PartTitle>一般用法</PartTitle>
    <Button
      onTap={() =>
        showFrequentModal({
          getImg: () =>
            Promise.resolve(
              Object.values(CommonImg)[
                new Date() % Object.values(CommonImg).length
              ],
            ),
          validator: code =>
            code === '123' ? Promise.resolve() : Promise.reject(),
        }).then(() => {
          showToast({ title: '成功' });
        })
      }
      type={'priary'}
    >
      显示弹窗，正确验证码123
    </Button>
  </Space>
);
```

<API></API>
