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
import React, { useRef, useMemo, useEffect, useState } from 'react';
import {
  Calendar,
  Space,
  PartTitle,
  Button,
  Sheet,
  Icon,
  rpxToPx,
} from '@kqinfo/ui';
import dayjs from 'dayjs';
import { SheetInstance } from '@kqinfo/ui/es/sheet';
import weekday from 'dayjs/plugin/weekday';

dayjs.extend(weekday);

export default () => {
  const sheetRef = useRef<SheetInstance>(null);
  const [days, setDays] = useState<number[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setDays(new Array(10).fill(0).map((_, i) => dayjs().get('day') + i));
    }, 2000);
  }, []);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>自定义一个日历</PartTitle>
      <Calendar.Picker onChange={console.log} />
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
      <PartTitle>自定义渲染</PartTitle>
      <Calendar
        weekOffset={dayjs().weekday()}
        renderDate={day =>
          dayjs().isSame(day, 'date')
            ? '今天'
            : `${day.get('month') + 1}/${day.get('date')}`
        }
        renderDot={day =>
          days.includes(day.get('day')) && (
            <div style={{ transform: 'scale(.6)' }}>满</div>
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
