import { useEffectState, useLoadMore } from 'parsec-hooks';
import {
  LoadMoreGetListFn,
  LoadMoreOptions,
} from 'parsec-hooks/lib/loadMoreHooks';
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useMemo,
} from 'react';
import Visible from '../visible';
import NoData from '../no-data';
import Loading from '../loading';
import Button from '../button';

interface Props<D> extends Omit<LoadMoreOptions, 'loadMoreVisible'> {
  /**
   * 渲染子项
   */
  renderItem: (data: D, index: number, list: D[]) => React.ReactElement;
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
   * 渲染每项的高度，设置后可以开启虚拟滚动，请传入rpx的number值
   */
  renderItemHeight?: (data: D, index: number) => number;
  /**
   * 样式
   */
  style?: React.CSSProperties;
  /**
   * 类名
   */
  className?: string;
}

const List = forwardRef(
  // eslint-disable-next-line @typescript-eslint/ban-types
  <D extends { id: number }>(
    {
      getList,
      renderItem,
      cacheKey = process.env.REMAX_PLATFORM === 'wechat'
        ? // eslint-disable-next-line
          // @ts-ignore
          getCurrentPages()[getCurrentPages().length - 1].pageId
        : window.location.pathname,
      noData = useMemo(() => <NoData />, []),
      noMore,
      loadingTip,
      renderItemHeight,
      className,
      style,
      defaultLimit = 10,
      ...options
    }: Props<D>,
    ref: React.Ref<{ refreshList: (retainList?: boolean) => Promise<void> }>,
  ) => {
    const [loadMoreVisible, setLoadMoreVisible] = useState(false);
    const { refreshList, list, isEnd, loading, error } = useLoadMore(getList, {
      cacheKey,
      ...options,
      loadMoreVisible,
    });
    const [showError, setShowError] = useEffectState(error);
    useImperativeHandle(ref, () => ({ refreshList }));
    useEffect(() => {
      if (error) {
        console.error(error);
      }
    }, [error]);
    loadingTip = useMemo(() => loadingTip || <Loading type={'inline'} />, [
      loadingTip,
    ]);
    const footer = useMemo(
      () => (
        <Visible
          onVisible={() => setLoadMoreVisible(true)}
          onHidden={() => setLoadMoreVisible(false)}
        >
          {loading
            ? loadingTip
            : list.length === 0
            ? noData || noMore || loadingTip
            : isEnd
            ? noMore || noData
            : loadingTip}
        </Visible>
      ),
      [isEnd, list.length, loading, loadingTip, noData, noMore],
    );
    const list2 = useMemo(() => {
      const result: D[][] = [];
      list.forEach((_, i) => {
        if (!(i % defaultLimit)) {
          result.push([...list].slice(i, i + defaultLimit));
        }
      });
      return result;
    }, [defaultLimit, list]);
    return useMemo(
      () => (
        <>
          {showError ? (
            <Button
              onTap={() => {
                setShowError(false);
              }}
              style={{ margin: '20px auto' }}
            >
              加载失败，点击重试
            </Button>
          ) : renderItemHeight ? (
            <>
              {list2.map((items, index) => {
                let height = 0;
                items.forEach((item, i) => {
                  height += renderItemHeight(item, index * defaultLimit + i);
                });
                return (
                  <Visible key={index} height={height} perf>
                    {items.map((data, i) =>
                      renderItem(data, index * defaultLimit + i, list),
                    )}
                  </Visible>
                );
              })}
              {footer}
            </>
          ) : (
            <>
              {list.map((data, index) => renderItem(data, index, list))}
              {footer}
            </>
          )}
        </>
      ),
      [
        defaultLimit,
        footer,
        list,
        list2,
        renderItem,
        renderItemHeight,
        setShowError,
        showError,
      ],
    );
  },
);

export default List as <D extends unknown>(
  props: Props<D> & {
    ref?: React.Ref<{ refreshList: (retainList?: boolean) => Promise<void> }>;
  },
) => React.ReactElement;
