import React from 'react';
import { View, ViewProps } from 'remax/one';

export interface Props extends React.PropsWithChildren<ViewProps> {
  /**
   * 是否折叠
   * @default false
   */
  folded?: boolean;
}

export default ({ folded, style, ...props }: Props) => {
  return (
    <View
      style={{
        transition: `all ${folded ? 0.3 : 1}s`,
        overflow: 'hidden',
        ...(folded ? { maxHeight: 0 } : { maxHeight: '100vh' }),
        ...style,
      }}
      {...props}
    />
  );
};
