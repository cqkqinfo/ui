// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Visible from './native';
import React from 'react';
import { View } from 'remax/wechat';
import { Props } from './index';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import InView from 'react-native-component-inview';
import { useRef } from 'react';

export default ({
  children,
  className,
  onHidden,
  onVisible,
  height,
  perf,
}: Props) => {
  const ref = useRef();
  return (
    <InView
      bindvisible={onVisible}
      collapsable={false}
      className={className}
      onChange={(v: any) => {
        if (ref.current === v) {
          v = !v;
        }
        if (ref.current === v) {
          v = !v;
        }
        if (v) {
          onVisible?.();
        } else {
          onHidden?.();
        }
        ref.current = v;
      }}
    >
      {children || <View style={{ height: '1px', width: '1px' }} />}
    </InView>
  );
};
