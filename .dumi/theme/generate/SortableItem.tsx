import React, { forwardRef, useMemo, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Tooltip } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import types from './types.json';
import {
  BarCode,
  Button,
  CommonImg,
  Form,
  FormItem,
  Icon,
  PartTitle,
  Space,
} from '@kqinfo/ui';

export type TypeKeys = keyof typeof types;

export interface ItemType {
  id: number;
  type: TypeKeys;
  props: any;
}

const SortableItem = ({
  initList = [],
  onSetType,
  props: outProps = {},
  onSetId,
  clone = false,
  currentId,
  ...props
}: {
  initList?: ItemType[];
  onSetType?: (type: TypeKeys) => void;
  onSetId?: (id: number) => void;
  currentId?: number;
  props?: { [id: number]: any };
  clone?: boolean;
}) => {
  const [list, setList] = useState<ItemType[]>(initList);
  return (
    <ReactSortable
      list={list}
      animation={150}
      group={{ name: 'cloning-group-name', pull: clone ? 'clone' : undefined }}
      setList={setList}
      fallbackOnBody
      tag={useMemo(
        () =>
          forwardRef<HTMLDivElement, any>((props, ref) => {
            const haveChildren = !!props.children.length;
            return (
              <Space
                ref={ref}
                vertical
                justify={'center'}
                padding={haveChildren ? undefined : '10px'}
                size={'10px'}
                {...props}
                style={{
                  alignSelf: 'stretch',
                  border: '1px solid #eee',
                  width: 375,
                  ...props.style,
                }}
              >
                {haveChildren ? (
                  props.children
                ) : (
                  <Space justify={'center'} className={'test'}>
                    拖拽到此处
                  </Space>
                )}
              </Space>
            );
          }),
        [],
      )}
      style={{ height: 50, border: '1px solid #eee', flex: 1 }}
      clone={item => {
        const id = Math.random();
        onSetId?.(id);
        onSetType?.(item.type);
        return { ...item, id };
      }}
      {...props}
    >
      {list.map(({ id, type, props }, index) => {
        const { component: Com, initProps } = TypeObj[type];
        return (
          <Tooltip
            key={id}
            title={
              <DeleteOutlined
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  list.splice(index, 1);
                  setList([...list]);
                }}
              />
            }
          >
            <div
              onClick={e => {
                e.stopPropagation();
                onSetId?.(id);
                onSetType?.(type);
              }}
              style={
                currentId === id ? { border: '1px solid #2780d9' } : undefined
              }
            >
              <div>
                <Com {...initProps} {...props} {...outProps[id]} />
              </div>
            </div>
          </Tooltip>
        );
      })}
    </ReactSortable>
  );
};

const TypeObj: any = {
  Button: { component: Button, initProps: { children: '按钮' } },
  Space: {
    component: SortableItem,
  },
  Form: {
    component: Form,
    initProps: {
      cell: true,
      labelWidth: '4em',
      children: (
        <>
          <FormItem label={'姓名'} name={'name'} />
          <FormItem
            label={'手机号'}
            name={'phone'}
            rules={[{ type: 'phone' }]}
          />
        </>
      ),
    },
  },
  BarCode: { component: BarCode, initProps: { content: '233' } },
  Image: {
    component: BarCode,
    initProps: { src: CommonImg.doctor, style: { width: 100, height: 100 } },
  },
  Icon: { component: Icon, initProps: { name: 'kq-search' } },
  PartTitle: { component: PartTitle, initProps: { children: '标题' } },
};

export default SortableItem;
