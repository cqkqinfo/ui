---
nav:
  title: Components
  path: /components
---

## Picker

地区选择:

```tsx
import React from 'react';
import { Picker, addressOptions } from '@kqinfo/ui';

export default () => <Picker cols={3} data={addressOptions}>显示</Picker>;
```

日期选择:

```tsx
import React from 'react';
import { Picker } from '@kqinfo/ui';

export default () => <Picker date={'date'}>显示</Picker>;
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
