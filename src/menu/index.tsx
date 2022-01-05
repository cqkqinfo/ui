import classNames from 'classnames';
import React, { useMemo } from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import { useEffectState } from 'parsec-hooks';
import { useConfig } from '../config-provider';
import { Space } from '@kqinfo/ui';

export type ID = string | number;

export interface MenuItem {
  id: ID;
  name: React.ReactNode;
  children?: MenuItem[];
}

export interface Props {
  className?: string;
  /**
   * 左边布局的类名
   */
  leftCls?: string;
  /**
   * 左边子项类名
   */
  leftItemCls?: string;
  /**
   * 右边布局的类名
   */
  rightCls?: string;
  /**
   * 右边子项类名
   */
  rightItemCls?: string;
  /**
   * 菜单数据
   */
  data: MenuItem[];
  /**
   * 当前选择的菜单id
   */
  current?: ID;
  /**
   * 当前选择的菜单id
   */
  onChange?: (id: ID, children: MenuItem[]) => void;
  /**
   * 选择了子项后的事件
   */
  onSelect?: (item: MenuItem) => void;
  /**
   * 适老模式，开启后尺寸会变大
   */
  elderly?: boolean;
  /**
   * 样式
   */
  style?: React.CSSProperties;
}

export default ({
  className,
  leftCls,
  rightCls,
  data,
  leftItemCls,
  rightItemCls,
  current = data?.[0]?.children?.[0]?.id || data?.[0]?.id,
  onSelect,
  elderly = useConfig().elderly,
  onChange,
  style,
}: Props) => {
  const [selected, setSelected] = useEffectState(current, { wait: 300 });
  const right = useMemo(() => {
    return (
      data
        .map(item => [item, item.children])
        .flat(3)
        .find(item => item?.id === selected)?.children || []
    );
  }, [data, selected]);
  return (
    <View
      className={classNames(styles.menu, className, elderly && styles.elderly)}
      style={style}
    >
      <View className={classNames(styles.left, leftCls)}>
        {data.map(({ id, name, children }) => {
          const active =
            (selected === id && styles.leftActive) ||
            children?.some(({ id }) => id === selected);
          const haveChildren = children?.some(({ children }) => children);
          return (
            <Space
              vertical
              size={30}
              key={id}
              className={classNames(
                styles.leftItem,
                leftItemCls,
                active && styles.leftActive,
              )}
              onTap={() => {
                if (haveChildren && children?.[0]) {
                  const first = children[0];
                  setSelected(first.id);
                  onChange?.(first.id, first.children || []);
                } else {
                  setSelected(id);
                  onChange?.(id, children || []);
                }
              }}
            >
              {name}
              {haveChildren && (
                <Space vertical key={id}>
                  {children?.map(({ name, id }) => (
                    <View
                      className={classNames(
                        styles.leftItemItem,
                        selected === id && styles.leftItemActive,
                      )}
                      key={id}
                      onTap={e => {
                        e.stopPropagation();
                        setSelected(id);
                        onChange?.(id, children || []);
                      }}
                    >
                      {name}
                    </View>
                  ))}
                </Space>
              )}
            </Space>
          );
        })}
      </View>
      <View className={classNames(styles.right, rightCls)}>
        {right.map((item, i) => (
          <View
            key={item.id}
            style={{ borderBottom: i === right.length - 1 ? 0 : undefined }}
            className={classNames(styles.rightItem, rightItemCls)}
            onTap={() => onSelect?.(item)}
          >
            {item.name}
          </View>
        ))}
      </View>
    </View>
  );
};
