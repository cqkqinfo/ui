import { View } from 'remax/one';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { GCanvasView } from '@flyskywhy/react-native-gcanvas';

export default React.forwardRef((props: any, ref) => {
  return (
    <View
      {...props}
      style={{ width: 300, height: 150, ...props.style }}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // onLayout={e => setWh(e.nativeEvent.layout)}
    >
      <GCanvasView style={{ width: '100%', height: '100%' }} ref={ref} />
    </View>
  );
});
