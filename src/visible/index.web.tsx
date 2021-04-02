import React, { useEffect, useRef } from 'react';
import { useObserve } from 'parsec-hooks';

interface Props {
  onVisible?: () => void;
  onHidden?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default ({ children, className, onHidden, onVisible }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useObserve(ref);
  useEffect(() => {
    if (visible) {
      onVisible?.();
    } else {
      onHidden?.();
    }
  }, [visible, onVisible, onHidden]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
