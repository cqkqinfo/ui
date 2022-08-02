import classNames from 'classnames';
import React, { useMemo, useState, memo } from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';
import { useEffectState } from 'parsec-hooks';
import { useConfig } from '../config-provider';
import { Space, Icon, Rotate, Fold } from '@kqinfo/ui';
import ScrollView from '../scroll-view';
import classnames from 'classnames';

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
   * 左边子项选中类名
   */
  leftActiveCls?: string;
  /**
   * 左边子项的子项选中类名
   */
  leftChildrenActiveCls?: string;
  /**
   * 右边布局的类名
   */
  rightCls?: string;
  /**
   * 右边子项类名
   */
  rightItemCls?: string;
  /**
   * 右边选中子项类名
   */
  rightActiveCls?: string;
  /**
   * 右边子项子级类名
   */
  rightItemChildrenCls?: string;
  /**
   * 菜单list模式类名
   */
  listCls?: string;
  /**
   * 菜单list子项类名
   */
  listItemCls?: string;
  /**
   * 菜单数据
   */
  data: MenuItem[];
  /**
   * 当前选择的菜单id
   */
  current?: ID;
  /**
   * 菜单模式
   * @default children
   *  */
  menuMode?: 'children' | 'list' | 'singleCol';
  /**
   * 右边图标大小，默认是fontSize的值，传入number的话请输入rpx的值
   * @default 12px
   */
  rightIconSize?: number | string;
  /**
   * 二级菜单模式: 折叠、子菜单
   * @default subMenu
   */
  childrenMenuMode?: 'collapse' | 'subMenu';
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
  leftChildrenActiveCls,
  rightItemChildrenCls,
  listCls,
  listItemCls,
  menuMode = 'children',
  childrenMenuMode = 'subMenu',
  leftActiveCls,
  rightItemCls,
  rightIconSize = '12px',
  current = data?.[0]?.children?.[0]?.children
    ? childrenMenuMode === 'subMenu'
      ? data?.[0]?.children?.[0]?.id
      : data?.[0]?.id
    : data?.[0]?.id,
  onSelect,
  elderly = useConfig().elderly,
  onChange,
  style,
  rightActiveCls,
}: Props) => {
  const [selected, setSelected] = useEffectState(current, { wait: 300 });
  const [rightSelected, setRightSelected] = useEffectState<
    MenuItem | undefined
  >(undefined);
  const right = useMemo(() => {
    return childrenMenuMode === 'subMenu'
      ? data
          .map(item => [item, item.children])
          .flat(3)
          .find(item => item?.id === selected)?.children || []
      : data.find(item => item?.id === selected)?.children || [];
  }, [childrenMenuMode, data, selected]);
  return (
    <View
      className={classNames(styles.menu, className, elderly && styles.elderly)}
      style={style}
    >
      {menuMode === 'children' ? (
        <>
          <ScrollView scrollY className={classNames(styles.left, leftCls)}>
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
                    active && classNames(styles.leftActive, leftActiveCls),
                  )}
                  onTap={() => {
                    if (
                      haveChildren &&
                      children?.[0] &&
                      childrenMenuMode === 'subMenu'
                    ) {
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
                  {haveChildren && active && childrenMenuMode === 'subMenu' && (
                    <ScrollView scrollY className={styles.leftScroll}>
                      <Space vertical key={id}>
                        {children?.map(({ name, id, children }) => (
                          <View
                            className={classNames(
                              styles.leftItemItem,
                              selected === id &&
                                classNames(
                                  styles.leftItemActive,
                                  leftChildrenActiveCls,
                                ),
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
                    </ScrollView>
                  )}
                </Space>
              );
            })}
          </ScrollView>
          <ScrollView scrollY className={classNames(styles.right, rightCls)}>
            {right.map((item, i) =>
              item?.children ? (
                <CollapseItem
                  key={item.id}
                  className={classNames(styles.rightItem, rightItemCls)}
                  activeCls={rightActiveCls}
                  iconSize={rightIconSize}
                  childrenClassName={rightItemChildrenCls}
                  item={item}
                  onChange={() => onChange?.(item.id, item.children || [])}
                  onTap={(v: MenuItem) => {
                    onSelect?.(v);
                  }}
                />
              ) : (
                <Space
                  alignItems="center"
                  justify="space-between"
                  key={item.id}
                  style={{
                    borderBottom: i === right.length - 1 ? 0 : undefined,
                  }}
                  className={classNames(
                    styles.rightItem,
                    rightItemCls,
                    rightSelected?.id === item.id && rightActiveCls,
                  )}
                  onTap={() => {
                    onSelect?.(item);
                    setRightSelected(item);
                  }}
                >
                  <View>{item.name}</View>
                </Space>
              ),
            )}
          </ScrollView>
        </>
      ) : (
        <ScrollView scrollY className={classNames(styles.list, listCls)}>
          {data.map(item => {
            const { id, name } = item;
            return menuMode === 'singleCol' ? (
              <CollapseItem
                key={item.id}
                className={classNames(styles.singleColItem, leftItemCls)}
                activeCls={classNames(styles.leftActive, leftActiveCls)}
                childrenActiveCls={classNames(
                  styles.singleChildrenItemActive,
                  rightActiveCls,
                )}
                iconSize={rightIconSize}
                childrenClassName={classNames(
                  styles.singleChildrenItem,
                  rightItemChildrenCls,
                )}
                item={item}
                onChange={() => onChange?.(item.id, item.children || [])}
                onTap={(v: MenuItem) => {
                  onSelect?.(v);
                }}
              />
            ) : (
              <Space
                key={id}
                alignItems="center"
                justify="space-between"
                className={classNames(styles.listItem, listItemCls)}
                onTap={() => {
                  onChange?.(id, [{ id, name }]);
                }}
              >
                <View>{name}</View>
                <Icon name={'kq-right'} size={rightIconSize} />
              </Space>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const CollapseItem = memo(
  ({
    item,
    onChange,
    onTap,
    className,
    childrenClassName,
    childrenActiveCls,
    iconSize,
    activeCls,
  }: {
    item: MenuItem;
    onChange?: () => void;
    onTap: (item: MenuItem) => void;
    className?: string;
    childrenClassName?: string;
    childrenActiveCls?: string;
    activeCls?: string;
    iconSize: string | number;
  }) => {
    const [folded, setFolded] = useState(true);
    return (
      <>
        <Space
          alignItems="center"
          justify="space-between"
          className={classnames(className, !folded && activeCls)}
          onTap={e => {
            e.stopPropagation();
            onChange ? onChange() : onTap(item);
            if (item?.children && item?.children?.length > 0) {
              setFolded(!folded);
            }
          }}
        >
          <View>{item.name}</View>

          {item?.children && item?.children?.length > 0 && (
            <Rotate angle={folded ? 0 : 90}>
              <Icon name={'kq-right'} size={iconSize} />
            </Rotate>
          )}
        </Space>

        <Fold folded={folded} animation={!item?.children?.length}>
          {item?.children &&
            item?.children?.map(v => (
              <CollapseItem
                key={v.id}
                className={classNames(className, childrenClassName)}
                childrenClassName={classNames(
                  childrenClassName,
                  styles.singleChildrenChildrenItem,
                )}
                activeCls={childrenActiveCls}
                childrenActiveCls={childrenActiveCls}
                iconSize={iconSize}
                item={v}
                onTap={onTap}
              />
              // <Space
              //   className={classNames(
              //     styles.rightItem,
              //     styles.rightItemText,
              //     childrenClassName,
              //   )}
              //   key={v.id}
              //   onTap={() => onTap(v)}
              // >
              //   {v.name}
              // </Space>
            ))}
        </Fold>
      </>
    );
  },
);
