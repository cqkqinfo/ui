import { useViewLayout } from '@kqinfo/ui';
import React, { useEffect, useState } from 'react';

export default ({
  children,
  maxWidth,
  comWidth,
  style,
}: {
  children: React.ReactElement;
  maxWidth: number;
  comWidth?: number;
  style?: React.CSSProperties;
}) => {
  const { width, ...arg } = useViewLayout();
  comWidth = comWidth || width;
  const [scale, setScale] = useState(0);
  useEffect(() => {
    if (comWidth && maxWidth && comWidth > maxWidth) {
      setScale(maxWidth / comWidth);
    }
  }, [scale, maxWidth, comWidth]);
  return React.cloneElement(children, {
    ...children.props,
    ...arg,
    style: {
      ...children.props.style,
      zoom: scale,
      ...style,
    },
  });
};
