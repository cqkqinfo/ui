import { useEffectState, useLoadMore } from 'parsec-hooks';
import {
  LoadMoreGetListFn,
  LoadMoreOptions,
} from 'parsec-hooks/lib/loadMoreHooks';
import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useMemo,
  useRef,
  useCallback,
  useState,
} from 'react';
import Visible from '../visible';
import NoData from '../no-data';
import Loading from '../loading';
import Button from '../button';
import { Props as SpaceProps } from '../space';
import { NeedWrap, Space } from '@kqinfo/ui';
import Native, { NativeInstance } from '../native';

export interface Props<D> extends Omit<LoadMoreOptions, 'loadMoreVisible'> {
  /**
   * 渲染子项
   */
  renderItem: (
    data: D,
    index: number,
    list: D[],
    refreshList: () => void,
  ) => React.ReactElement;
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
   * space组件配置
   */
  space?: Omit<SpaceProps, 'children'>;
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
      space,
      needGet,
      ...options
    }: Props<D>,
    ref: React.Ref<{ refreshList: (retainList?: boolean) => Promise<void> }>,
  ) => {
    const loadingNativeRef = useRef<NativeInstance>(null);
    const noLoadingNativeRef = useRef<NativeInstance>(null);
    const [visible, setVisible] = useState(false);
    const { refreshList, list, isEnd, error, getNext } = useLoadMore(getList, {
      cacheKey,
      loadMoreVisible: visible,
      defaultLimit,
      needGet,
      ...options,
      customSetLoading: useCallback(loading => {
        loadingNativeRef.current?.setData?.({ visible: loading });
        noLoadingNativeRef.current?.setData?.({ visible: !loading });
      }, []),
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
    const footer = useMemo(() => {
      return (
        <Visible
          onVisible={() => {
            getNext();
            setVisible(true);
          }}
          onHidden={() => setVisible(false)}
        >
          <Native ref={loadingNativeRef} initData={{ visible: needGet }}>
            {loadingTip}
          </Native>
          <Native ref={noLoadingNativeRef} initData={{ visible: !needGet }}>
            {list.length === 0
              ? noData || noMore || loadingTip
              : isEnd
              ? noMore || noData
              : loadingTip}
          </Native>
        </Visible>
      );
    }, [getNext, isEnd, list.length, loadingTip, needGet, noData, noMore]);
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
        <NeedWrap wrap={space ? Space : React.Fragment} wrapProps={space} need>
          {showError ? (
            <Button
              onTap={() => {
                setShowError(false);
                refreshList();
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
                      renderItem(
                        data,
                        index * defaultLimit + i,
                        list,
                        refreshList,
                      ),
                    )}
                  </Visible>
                );
              })}
              {footer}
            </>
          ) : (
            <>
              {list.map((data, index) =>
                renderItem(data, index, list, refreshList),
              )}
              {footer}
            </>
          )}
        </NeedWrap>
      ),
      [
        defaultLimit,
        footer,
        list,
        list2,
        refreshList,
        renderItem,
        renderItemHeight,
        setShowError,
        showError,
        space,
      ],
    );
  },
);

export default List as <D extends unknown>(
  props: Props<D> & {
    ref?: React.Ref<{ refreshList: (retainList?: boolean) => Promise<void> }>;
  },
) => React.ReactElement;
