// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Visible from './native';
import React from 'react';
import { View } from 'remax/wechat';
import { Props } from './index';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import InView from 'react-native-component-inview';

export default ({
  children,
  className,
  onHidden,
  onVisible,
  height,
  perf,
}: Props) => {
  return (
    <InView
      bindvisible={onVisible}
      collapsable={false}
      className={className}
      onChange={(v: any) => {
        if (v) {
          onVisible?.();
        } else {
          onHidden?.();
        }
      }}
    >
      {children || <View style={{ height: '1px', width: '1px' }} />}
    </InView>
  );
};
