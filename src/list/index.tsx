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
import Loading from '../loading';
import Icon from '../icon';
import styles from './index.module.less';

interface Props<D> extends Omit<LoadMoreOptions, 'loadMoreVisible'> {
  /**
   * 渲染子项
   */
  renderItem: (data: D, index: number) => React.ReactNode;
  /**
   * 列表接口
   */
  getList: LoadMoreGetListFn<D>;
  /**
   * 没有更多时的空占位
   */
  noMore?: React.ReactNode;
  /**
   * 没有数据时的空占位
   * @default <NoData/>
   */
  noData?: React.ReactNode;
  /**
   * 加载中的提示元素
   * @default <Loading top/>
   */
  loadingTip?: React.ReactNode;
  /**
   * space组件的props
   */
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
      loadingTip = (
        <>
          <Loading type={'top'} />
          <Loading type={'inline'} />
        </>
      ),
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
