import DropShadow from 'react-native-drop-shadow';
import React from 'react';
import { Text } from 'remax/one';
import { Props } from './index';
import { useConfig } from '../config-provider';
import rpxToPx from '../rpx-to-px';
import NeedWrap from '../need-wrap';
const convert = require('color-convert');

export default ({
  children,
  card,
  shadowColor: outShadowColor,
  active,
  ...props
}: Props) => {
  const { brandPrimary, shadowColor = brandPrimary } = useConfig();
  const rpx20 = rpxToPx(20) + 'px';
  return (
    <DropShadow
      style={
        {
          shadowOffset: {
            height: 1,
          },
          shadowColor:
            outShadowColor !== false &&
            `rgb(${convert.hex.rgb(outShadowColor || shadowColor).join(',')})`,
          shadowOpacity: 0.15,
          ...(card
            ? {
                boxSizing: 'border-box',
                backgroundColor: '#fff',
                borderRadius: rpx20,
                paddingLeft: rpx20,
                paddingRight: rpx20,
              }
            : {}),
          ...props.style,
          borderWidth: active ? 1 : undefined,
          borderColor: outShadowColor || shadowColor,
        } as any
      }
    >
      <NeedWrap
        wrap={Text}
        need={typeof children === 'string'}
        wrapProps={{ style: { backgroundColor: '#fff' } }}
      >
        {React.isValidElement(children)
          ? React.cloneElement(children, {
              ...(children as any).props,
              style: {
                backgroundColor:
                  (children as any).props.style?.background || '#fff',
                ...(children as any).props.style,
              },
            })
          : children}
      </NeedWrap>
    </DropShadow>
  );
};
