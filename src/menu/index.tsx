import classNames from 'classnames';
import React from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import { useEffectState } from 'parsec-hooks';

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
}

export default ({
  className,
  leftCls,
  rightCls,
  data,
  leftItemCls,
  rightItemCls,
  current = data?.[0]?.id,
  onSelect,
  onChange,
}: Props) => {
  const [selected, setSelected] = useEffectState(current, { wait: 300 });
  const right = data.find(({ id }) => id === selected)?.children || [];
  return (
    <View className={classNames(styles.menu, className)}>
      <View className={classNames(styles.left, leftCls)}>
        {data.map(({ id, name, children }) => (
          <View
            key={id}
            className={classNames(
              styles.leftItem,
              leftItemCls,
              selected === id && styles.leftActive,
            )}
            onTap={() => {
              setSelected(id);
              onChange?.(id, children || []);
            }}
          >
            {name}
          </View>
        ))}
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
