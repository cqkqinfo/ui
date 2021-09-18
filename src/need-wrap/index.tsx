import React from 'react';

export interface Props<P> {
  /**
   * Wrap组件
   */
  wrap: React.ComponentType<P>;
  children: React.ReactNode;
  /**
   * Wrap组件的props
   */
  wrapProps?: P;
  /**
   * 是否需要wrap
   */
  need: boolean;
  style?: React.CSSProperties;
}

export default <P extends unknown = {}>({
  wrap: Wrap,
  children,
  wrapProps,
  style,
  need,
}: Props<P>) => {
  return need ? (
    <Wrap {...wrapProps} style={{ ...style, ...(wrapProps as any)?.style }}>
      {children}
    </Wrap>
  ) : (
    (children as any) || null
  );
};
