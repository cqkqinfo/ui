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
}

export default ({ children, className, onHidden, onVisible }: Props) => (
  <Visible class-name={className} bindvisible={onVisible} bindhidden={onHidden}>
    {children || <View style={{ height: '1px' }} />}
  </Visible>
);
