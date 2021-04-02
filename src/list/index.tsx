import { useLoadMore } from 'parsec-hooks';
import {
  LoadMoreGetListFn,
  LoadMoreOptions,
} from 'parsec-hooks/lib/loadMoreHooks';
import React, { useState, forwardRef, useImperativeHandle } from 'react';
import Visible from '../visible';
import Space, { Props as SpaceProps } from '../space';
import NeedWrap from '../need-wrap';
import NoData from '../no-data';

interface Props<D> extends Omit<LoadMoreOptions, 'loadMoreVisible'> {
  renderItem: (data: D, index: number) => React.ReactNode;
  getList: LoadMoreGetListFn<D>;
  noMore?: React.ReactNode;
  noData?: React.ReactNode;
  loadingTip?: React.ReactNode;
  spaceProps?: SpaceProps;
}

const List = forwardRef(
  <D extends unknown>(
    {
      getList,
      renderItem,
      cacheKey = process.env.REMAX_PLATFORM === 'wechat'
        ? // eslint-disable-next-line
          // @ts-ignore
          getCurrentPages()[getCurrentPages().length - 1].pageId
        : window.location.pathname,
      noData = <NoData />,
      spaceProps,
      noMore,
      loadingTip = <NoData />,
      ...options
    }: Props<D>,
    ref: React.Ref<{ refreshList: (retainList?: boolean) => Promise<void> }>,
  ) => {
    const [loadMoreVisible, setLoadMoreVisible] = useState(false);
    const { refreshList, list, isEnd, loading } = useLoadMore(getList, {
      cacheKey,
      ...options,
      loadMoreVisible,
    });
    useImperativeHandle(ref, () => ({ refreshList }));
    return (
      <NeedWrap need={!!spaceProps} wrap={Space} wrapProps={spaceProps}>
        {list.map((data, index) => renderItem(data, index))}
        <Visible
          onVisible={() => setLoadMoreVisible(true)}
          onHidden={() => setLoadMoreVisible(false)}
        >
          {loading
            ? loadingTip
            : list.length === 0
            ? noData || noMore || loadingTip
            : isEnd && (noMore || noData)}
        </Visible>
      </NeedWrap>
    );
  },
);

export default List as <D extends unknown>(
  props: Props<D> & {
    ref?: React.Ref<{ refreshList: (retainList?: boolean) => Promise<void> }>;
  },
) => React.ReactElement;
