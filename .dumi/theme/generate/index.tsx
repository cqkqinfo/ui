import React, { forwardRef, useMemo, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Space, BarCode, PartTitle, Icon, TransferChange } from '@kqinfo/ui';
import {
  Card,
  Form as AntForm,
  Input,
  Button as AntButton,
  Select,
  Radio,
  Tabs as AntTabs,
} from 'antd';
import types from './types.json';
import SortableItem, { TypeKeys } from './SortableItem';

export default () => {
  const [type, setType] = useState<TypeKeys>();
  const [id, setId] = useState<number>();
  const [props, setProps] = useState<any>({});
  const [list, setList] = useState([
    { id: 1, type: 'Button', text: '按钮' },
    { id: 2, type: 'Space', text: '布局' },
    { id: 3, type: 'Form', text: '表单' },
    { id: 4, type: 'BarCode', text: '条形码' },
    // { id: 5, type: 'Image', text: '图片' },
    { id: 6, type: 'Icon', text: '图标' },
    { id: 7, type: 'PartTitle', text: '块标题' },
  ]);
  return (
    <Space size={'20px'}>
      <Space style={{ position: 'sticky', top: 70, alignSelf: 'flex-start' }}>
        <Card title={'组件'}>
          <ReactSortable
            list={list}
            setList={setList}
            tag={useMemo(
              () =>
                forwardRef((props, ref) => (
                  <Space
                    flexWrap={'wrap'}
                    style={{ width: 150 }}
                    size={'10px'}
                    ref={ref}
                    ignoreNum={2}
                    {...props}
                  />
                )),
              [],
            )}
            group={{ name: 'cloning-group-name', pull: 'clone' }}
            clone={item => ({ ...item, id: Math.random() })}
          >
            {list.map(({ id, type, text }) => (
              <AntButton style={{ width: 70, marginBottom: 10 }} key={id}>
                {text}
              </AntButton>
            ))}
          </ReactSortable>
        </Card>
      </Space>
      <Space
        flex={1}
        style={{ position: 'sticky', top: 70, alignSelf: 'flex-start' }}
      >
        <Card style={{ flex: 1 }}>
          <Space justify={'center'}>
            <Space style={{ width: 375 }}>
              <SortableItem
                onSetType={setType}
                onSetId={setId}
                currentId={id}
                props={props}
              />
            </Space>
          </Space>
        </Card>
      </Space>
      <Space>
        <Card bodyStyle={{ paddingTop: 10 }}>
          <AntForm
            layout="vertical"
            onValuesChange={values =>
              setProps({
                ...props,
                [id + '']: { ...props[id + ''], ...values },
              })
            }
          >
            <AntTabs>
              <AntTabs.TabPane key={1} tab={'属性设置'}>
                {type &&
                  types[type].map(
                    ({ identifier, description, type, required }) => (
                      <AntForm.Item
                        name={identifier}
                        key={identifier}
                        label={identifier}
                        tooltip={description}
                        required={required}
                        initialValue={id && props[id]?.[identifier]}
                      >
                        {type.includes('|') && !/string|number/.test(type) ? (
                          <Select>
                            {type.split('|').map(i => {
                              const v = i.match(/\w+/)?.[0];
                              return (
                                <Select.Option value={v + ''}>
                                  {v}
                                </Select.Option>
                              );
                            })}
                          </Select>
                        ) : type === 'boolean' ? (
                          <Radio.Group>
                            <Radio value={true}>是</Radio>
                            <Radio value={false}>否</Radio>
                          </Radio.Group>
                        ) : (
                          <Input />
                        )}
                      </AntForm.Item>
                    ),
                  )}
              </AntTabs.TabPane>
              <AntTabs.TabPane key={2} tab={'样式设置'}>
                <AntForm.Item noStyle name={'style'}>
                  <TransferChange>
                    {(onChange, value) => (
                      <AntForm onValuesChange={onChange} initialValues={value}>
                        <AntForm.Item label={'宽度'} name={'width'}>
                          <Input />
                        </AntForm.Item>
                        <AntForm.Item label={'高度'} name={'height'}>
                          <Input />
                        </AntForm.Item>
                      </AntForm>
                    )}
                  </TransferChange>
                </AntForm.Item>
              </AntTabs.TabPane>
            </AntTabs>
          </AntForm>
        </Card>
      </Space>
    </Space>
  );
};
