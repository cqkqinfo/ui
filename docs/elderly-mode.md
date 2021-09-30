---
nav:
  title: 适老模式
  path: /elderly-mode
sidemenu: false
---

## 适老模式

配置[ConfigProvider](/components/config/config-provider)，整个布局将更适合老年人使用，已经支持部分组件

```tsx
import React, { useRef } from 'react';
import {
  ReInput,
  Space,
  Picker,
  PartTitle,
  FormItem,
  ReTextarea,
  Icon,
  Button,
  Form,
  ConfigProvider,
  Sheet,
  Calendar,
  ColorText,
  Menu,
  Tip,
  Radio,
  Search,
  addressOptions,
} from '@kqinfo/ui';
import { SheetInstance } from '@kqinfo/ui/es/sheet';
import dayjs from 'dayjs';

export default () => {
  const [form] = Form.useForm();
  const sheetRef = useRef<SheetInstance>(null);
  return (
    <ConfigProvider elderly>
      <Space vertical size={'10px'} alignItems={'stretch'}>
        <Space
          style={{ background: '#2780D9', padding: '10px 0' }}
          justify={'center'}
        >
          <Search
            showBtn
            inputWrapStyle={{ background: '#fff' }}
            btnStyle={{ background: '#fff', color: '#2780D9' }}
            placeholder={'请输入搜索内容'}
          />
        </Space>
        <Menu
          onSelect={console.log}
          onChange={console.log}
          data={[
            {
              name: '科室1',
              id: 1,
              children: [
                { name: '子科室1', id: 11 },
                { name: '子科室2', id: 12 },
              ],
            },
            {
              name: '科室2',
              id: 2,
              children: [
                { name: '子科室3', id: 13 },
                { name: '子科室4', id: 14 },
              ],
            },
          ]}
        />
        <PartTitle
          action={
            <Button type={'action'} onTap={() => form.resetFields()}>
              重置
            </Button>
          }
        >
          适老模式
        </PartTitle>
        <Form form={form} cell onFinish={console.log} labelWidth={'4em'}>
          <FormItem
            label={'密码'}
            name={'password'}
            rules={[{ type: 'password', required: true }]}
          />
          <FormItem label={'姓名'} name={'name'} rules={[{ required: true }]} />
          <FormItem
            label={'手机号'}
            name={'phone'}
            rules={[{ type: 'phone', required: true }]}
          />
          <FormItem
            label={'身份证号'}
            name={'idCard'}
            rules={[{ type: 'idCard', required: true }]}
          />
          <FormItem
            label={'城市'}
            rules={[{ required: true }]}
            name={'city'}
            after={<Icon name={'kq-right'} color={'#666'} />}
          >
            <Picker cols={3} data={addressOptions}>
              请选择
            </Picker>
          </FormItem>
          <FormItem label={'详情地区'} name={'area'}>
            <ReTextarea placeholder={'请输入地区'} />
          </FormItem>
        </Form>
        <Button type={'primary'} onTap={() => form.submit()}>
          提交
        </Button>
        <Button onTap={() => sheetRef.current?.setVisible(true)}>
          日期选择
        </Button>
        <Sheet ref={sheetRef}>
          <Space
            vertical
            style={{ height: '80vh', background: '#fff', overflow: 'auto' }}
          >
            <Space
              justify={'space-between'}
              padding={'5px'}
              alignItems={'center'}
            >
              <ColorText>日期选择</ColorText>
              <Button
                type={'primary'}
                size={'small'}
                block={false}
                onTap={() => {
                  sheetRef.current?.setVisible(false);
                }}
              >
                关闭
              </Button>
            </Space>
            {/*设置listEndDay会变为列表模式*/}
            <Calendar
              listEndDay={dayjs().add(8, 'month')}
              renderItemProps={(day, index) =>
                dayjs()
                  .add(3, 'day')
                  .format('YYYY-MM-DD') === day.format('YYYY-MM-DD')
                  ? {
                      style: {
                        color: '#D95E38',
                        backgroundColor: 'rgba(217, 94, 56, .1)',
                      },
                    }
                  : {}
              }
              renderDot={(day, index) =>
                dayjs()
                  .add(3, 'day')
                  .format('YYYY-MM-DD') === day.format('YYYY-MM-DD') ? (
                  <div style={{ color: '#D95E38' }}>满</div>
                ) : dayjs().isAfter(day) ? (
                  <div>无号</div>
                ) : (
                  <div>有号</div>
                )
              }
            />
          </Space>
        </Sheet>
        <Tip
          items={[
            <Space style={{ color: '#D95E38', marginBottom: 20 }}>
              请在预约时间段内携带本人身份证前往医院登记台完成登记与接种
            </Space>,
            '1、3-7天之内不宜饮酒',
            '2、不宜剧烈运动，应注意休息',
            '3、一周内避免接触个人既往过敏物及常见致敏源',
            '4、一周内不宜进食辛辣刺激或海鲜类食物，建议清淡饮食',
          ]}
        />
      </Space>
    </ConfigProvider>
  );
};
```
