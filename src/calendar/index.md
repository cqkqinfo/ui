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
import React, { useRef, useMemo } from 'react';
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
import { useEffectState } from 'parsec-hooks';

const CalendarPicker = ({ style, current, ...props }: Props) => {
  const [currentMonth, setCurrentMonth] = useEffectState(
    useMemo(
      () => (current instanceof Array ? current[0] : current) || dayjs(),
      [current],
    ),
  );
  return (
    <Space vertical size={30} style={style}>
      <Space
        justify={'space-between'}
        style={{
          fontSize: rpxToPx(36),
          fontWeight: 'bold',
          marginTop: rpxToPx(30),
        }}
        alignItems={'center'}
      >
        <Icon
          size={28}
          color={'#3A3A3A'}
          name={'kq-left'}
          onTap={() => setCurrentMonth(currentMonth.subtract(1, 'y'))}
        />
        <Icon
          size={34}
          color={'#3A3A3A'}
          name={'kq-zuo'}
          onTap={() => setCurrentMonth(currentMonth.subtract(1, 'month'))}
        />
        {currentMonth.format('YYYY年MM月')}
        <Icon
          size={34}
          color={'#3A3A3A'}
          name={'kq-you'}
          onTap={() => setCurrentMonth(currentMonth.add(1, 'month'))}
        />
        <Icon
          size={28}
          color={'#3A3A3A'}
          name={'kq-right'}
          onTap={() => setCurrentMonth(currentMonth.add(1, 'y'))}
        />
      </Space>
      <Calendar
        limit={42}
        startDay={dayjs(currentMonth).set('date', 1)}
        renderDisable={day => !day.isSame(currentMonth, 'month')}
        current={current}
        {...props}
      />
    </Space>
  );
};

export default () => {
  const sheetRef = useRef<SheetInstance>(null);
  return (
    <Space vertical size={'10px'}>
      <PartTitle>自定义一个日历</PartTitle>
      <CalendarPicker onChange={console.log} />
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
        renderDate={day => `${day.get('month') + 1}/${day.get('date')}`}
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
