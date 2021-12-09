import React, { useEffect, useRef } from 'react';
import { useInViewport } from 'ahooks';
import { View } from 'remax/one';

export interface Props {
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

export default ({ children, className, onHidden, onVisible }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInViewport(ref);
  useEffect(() => {
    if (visible) {
      onVisible?.();
    } else {
      onHidden?.();
    }
  }, [visible, onVisible, onHidden]);
  return (
    <div ref={ref} className={className}>
      {children || <View style={{ height: '1px', width: '1px' }} />}
    </div>
  );
};
