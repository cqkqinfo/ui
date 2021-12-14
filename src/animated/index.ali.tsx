import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import View from './native-ali';

export default {
  View: ({ children, onAnimationEnd, ...animation }: any) => {
    return (
      <View animation={animation?.step?.().export()} bindend={onAnimationEnd}>
        {children}
      </View>
    );
  },
};
