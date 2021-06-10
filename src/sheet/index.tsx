import React from 'react';
import { View } from 'remax/wechat';
import CNs from 'classnames';

import './index.less';

export interface SheetProps {
  children?: React.ReactNode;
  visible: boolean;
  onHide?: (visible: boolean) => void;
  top?: boolean;
  className?: string;
}

export default ({
  children,
  className,
  visible,
  onHide = () => {},
  top,
}: SheetProps) => {
  const cn = 'Component-sheet';
  const cns = CNs(cn, className, {
    [`${cn}-show`]: visible,
    [`${cn}-top`]: top,
  });
  return (
    <View className={cns}>
      <View className="Sheet-bg" onClick={() => onHide(false)} />
      <View className="Sheet-content">{children}</View>
    </View>
  );
};
