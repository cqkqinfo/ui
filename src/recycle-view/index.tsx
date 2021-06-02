import { VariableSizeList } from 'react-window';
import React, { forwardRef } from 'react';
import { ScrollViewProps } from 'remax/wechat';
import { View } from 'remax/one';

export interface Props<D> extends ScrollViewProps {
  data?: D[];
  scrollTopByIndex?: number;
  overscanCount?: number;
  placeholderImage?: string;
  headerHeight?: number;
  bottomHeight?: number;
  renderHeader?: () => React.ReactElement;
  renderBottom?: () => React.ReactElement;
  renderItem: (item: D, index: number) => React.ReactElement;
}

export default <D extends { height: number }>({
  data = [],
  renderItem,
  renderBottom,
  bottomHeight,
  overscanCount,
  style,
}: Props<D>) => {
  return (
    <VariableSizeList
      height={style?.height || 0}
      width={style?.width || 0}
      itemCount={data?.length}
      itemSize={index => data[index].height}
      overscanCount={overscanCount}
      innerElementType={forwardRef((props, ref) => (
        <>
          <View ref={ref} {...props} />
          <View style={{ height: bottomHeight }}>{renderBottom?.()}</View>
        </>
      ))}
    >
      {({ index, style }) => (
        <View style={style}>{renderItem(data[index], index)}</View>
      )}
    </VariableSizeList>
  );
};
