import { Swiper } from '@kqinfo/ui';
import React, { useState } from 'react';
import { View } from 'remax/one';
import styles from './index.module.less';

export interface Props {
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default ({ children, action, style, ...props }: Props) => {
  const [current, setCurrent] = useState(0);
  return (
    <Swiper
      {...props}
      current={current}
      onChange={({ detail: { current } }) => setCurrent(current)}
      style={{ width: '100%', ...style }}
      items={[
        { node: children },
        {
          node: (
            <View
              style={{ height: '100%', display: 'flex' }}
              onTap={() => setCurrent(0)}
            >
              {action}
            </View>
          ),
          className: styles.item,
        },
      ]}
      displayMultipleItems={'auto' as any}
    />
  );
};
