import React from 'react';

interface Props<P> {
  wrap: React.ComponentType<P>;
  children: React.ReactNode;
  wrapProps?: P;
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
