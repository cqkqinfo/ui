// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Visible from './native';
import React from 'react';
import { View } from 'remax/wechat';
import { Props } from './index';

export default ({
  children,
  className,
  onHidden,
  onVisible,
  height,
  perf,
}: Props) => (
  <Visible
    perf={perf}
    class-name={className}
    bindvisible={onVisible}
    height={height}
    bindhidden={onHidden}
  >
    {children || <View style={{ height: '1px', width: '1px' }} />}
  </Visible>
);
