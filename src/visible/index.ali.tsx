// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Visible from './native-ali';
import React from 'react';
import { View } from 'remax/ali';

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
}: Props) => {
  return (
    <Visible
      perf={perf}
      class-name={className}
      onVisible={onVisible}
      height={height}
      onHidden={onHidden}
    >
      {children || <View style={{ height: '1px', width: '1px' }} />}
    </Visible>
  );
};
