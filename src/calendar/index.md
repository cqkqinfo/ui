---
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  path: /data-display
---

## Calendar 日历

日历

```tsx
import React, { useRef } from 'react';
import { Calendar, Space, PartTitle, Button, Sheet, Icon } from '@kqinfo/ui';
import dayjs from 'dayjs';
import { SheetInstance } from '@kqinfo/ui/es/sheet';

export default () => {
  const sheetRef = useRef<SheetInstance>(null);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>基本用法</PartTitle>
      <Calendar
        renderDate={day => `${day.get('month') + 1}/${day.get('date')}`}
      />
      <PartTitle>范围选择</PartTitle>
      <Calendar range current={[dayjs(), dayjs().add(7, 'd')]} />
      <PartTitle>列表模式</PartTitle>
      <Button
        type={'primary'}
        onTap={() => {
          sheetRef.current?.setVisible(true);
        }}
      >
        显示日期列表
      </Button>
      <Sheet ref={sheetRef}>
        <Space
          vertical
          style={{ height: '80vh', background: '#fff', overflow: 'auto' }}
        >
          <Button
            type={'primary'}
            onTap={() => {
              sheetRef.current?.setVisible(false);
            }}
          >
            隐藏日期列表
          </Button>
          {/*设置listEndDay会变为列表模式*/}
          <Calendar listEndDay={dayjs().add(8, 'month')} />
        </Space>
      </Sheet>
      <PartTitle>渲染标记点</PartTitle>
      <Calendar
        renderDot={(_, index) =>
          index === 5 ? (
            <div style={{ transform: 'scale(.6)' }}>满</div>
          ) : (
            index > 7
          )
        }
      />
      <PartTitle>渲染范围</PartTitle>
      <Calendar limit={35} startDay={dayjs().set('date', 1)} />
    </Space>
  );
};
```

<API></API>
