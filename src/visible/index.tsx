// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Visible from './native';
import React from 'react';
import { View } from 'remax/wechat';

interface Props {
  onVisible?: () => void;
  onHidden?: () => void;
  className?: string;
  children?: React.ReactNode;
  /**
   * 优化性能
   */
  perf?: boolean;
  height?: number;
}

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
