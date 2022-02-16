---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /general
---

## ActionsSheet 操作项

操作项

```tsx
import React, { useRef, useState } from 'react';
import { Space, ActionSheet, PartTitle, Button, showModal } from '@kqinfo/ui';

export default () => {
  return (
    <Space vertical size={'10px'}>
      <ActionSheet />
      <PartTitle>一般用法</PartTitle>
      <Button
        type={'primary'}
        onTap={() => {
          ActionSheet.show({
            title: '请选择',
            items: [
              { label: '操作项1', value: 1 },
              { label: '操作项2', value: 2 },
            ],
          }).then(({ label, value }) =>
            showModal({ title: label, content: `value: ${value}` }),
          );
        }}
      >
        显示
      </Button>
    </Space>
  );
};
```

<API></API>
