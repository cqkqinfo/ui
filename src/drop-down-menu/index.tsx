import React, { useMemo, useState, ReactElement, cloneElement } from 'react';
import { View } from 'remax/one';
import classNames from 'classnames';
import styles from './index.less';

export interface DropDownMenuProps {
  /**
   * 外层样式
   */
  className?: string;
  /**
   * 是否显示modal框
   * @default true
   */
  showModal?: boolean;
  children?: React.ReactNode;
}

function isReactElement(obj: any): obj is ReactElement {
  return obj && typeof obj?.props === 'object';
}

export default (props: DropDownMenuProps) => {
  const { children, className, showModal = true } = props;
  const [showOptions, setShowOptions] = useState<number>(-1);
  const handledChildren = useMemo(
    () =>
      React.Children.map(children, (item, index) => {
        if (isReactElement(item)) {
          const childProps = {
            ...item.props,
            onToggle: () => {
              setShowOptions(prev => (prev === index ? -1 : index));
            },
            showOptions: showOptions === index,
          };
          return cloneElement(item, childProps);
        }
        return item;
      }),
    [children, showOptions],
  );
  return (
    <View className={classNames(styles.wrap, className)}>
      {handledChildren}
      {showOptions !== -1 && showModal && <View className={styles.modal} />}
    </View>
  );
};
