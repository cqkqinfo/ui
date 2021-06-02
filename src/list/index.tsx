import { useEffectState, useId, useLoadMore } from 'parsec-hooks';
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
import Space from '../space';
import NoData from '../no-data';
import Loading from '../loading';
import Button from '../button';
import RecycleView from '../recycle-view';
import rpxToPx from '../rpx-to-px';
import useViewSize from '../use-view-size';
import screenWidth from '../screen-width';
import pxToRpx from '../px-to-rpx';

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
  /**
   * noData高度
   */
  noDataHeight?: number;
  /**
   * loading高度
   */
  loadingHeight?: number;
  /**
   * noMore高度
   */
  noMoreHeight?: number;
}

const List = forwardRef(
  // eslint-disable-next-line @typescript-eslint/ban-types
  <D extends {}>(
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
      loadingHeight = 140,
      noDataHeight = loadingHeight,
      noMoreHeight = loadingHeight,
      className,
      style,
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
    loadingTip = useMemo(
      () =>
        loadingTip || (
          <>
            {!loadMoreVisible && <Loading type={'top'} />}
            <Loading type={'inline'} />
          </>
        ),
      [loadMoreVisible, loadingTip],
    );
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
    const id = useId();
    const { width, height } = useViewSize(id);
    const bottomHeight = loading
      ? loadingHeight
      : list.length === 0
      ? noDataHeight || noMoreHeight || loadingHeight
      : isEnd
      ? noMoreHeight || noDataHeight
      : loadingHeight;
    const [showHeight, setShowHeight] = useState(height);
    console.log(width);
    useEffect(() => {
      if (height && bottomHeight !== height) {
        setShowHeight(height);
      }
    }, [bottomHeight, height]);
    return useMemo(
      () => (
        <Space
          style={{ width: '100%', height: '100%', ...style }}
          id={id}
          className={className}
          vertical
        >
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
            <RecycleView
              overscanCount={30}
              style={{
                width: width ? pxToRpx(width) : screenWidth,
                height: pxToRpx(showHeight || bottomHeight),
              }}
              renderBottom={() => (
                <Space justify={'center'} style={{ height: '100%' }}>
                  {footer}
                </Space>
              )}
              bottomHeight={rpxToPx(bottomHeight)}
              data={list.map((data, index) => ({
                ...data,
                height: rpxToPx(renderItemHeight(data, index)),
              }))}
              renderItem={(item, index) =>
                renderItem((item as any) as D, index, list)
              }
            />
          ) : (
            <>
              {list.map((data, index) => renderItem(data, index, list))}
              {footer}
            </>
          )}
        </Space>
      ),
      [
        bottomHeight,
        className,
        footer,
        id,
        list,
        renderItem,
        renderItemHeight,
        setShowError,
        showError,
        showHeight,
        style,
        width,
      ],
    );
  },
);

export default List as <D extends unknown>(
  props: Props<D> & {
    ref?: React.Ref<{ refreshList: (retainList?: boolean) => Promise<void> }>;
  },
) => React.ReactElement;
