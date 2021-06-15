import React from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import ConfigProvider from '../config-provider';
import NoData from '../no-data';
import Loading from '../loading';
import Shadow, { Props as ShadowProps } from '../shadow';
import NeedWrap from '../need-wrap';
import classNames from 'classnames';
const convert = require('color-convert');

export type DataSource<T> = T[];
export interface Column<T> {
  /**
   * 列的title
   */
  title: React.ReactNode;
  /**
   * 列的数据索引
   */
  dataIndex: keyof T;
  /**
   * 自定义渲染
   */
  render?: (value: T[keyof T], data: T, index: number) => React.ReactNode;
}

interface Props<T> extends ViewProps {
  /**
   * 表格数据
   */
  dataSource?: DataSource<T>;
  /**
   * 表格列
   */
  columns?: Column<T>[];
  /**
   * 头部类名
   */
  headerCls?: string;
  /**
   * 头部样式
   */
  headerStyle?: React.CSSProperties;
  /**
   * 单元格类名
   */
  itemCls?: string;
  /**
   * 单元格样式
   */
  itemStyle?: React.CSSProperties;
  /**
   * body里的行类名
   */
  rowCls?: string;
  /**
   * body里的行样式
   */
  rowStyle?: React.CSSProperties;
  /**
   * body类名
   */
  bodyCls?: string;
  /**
   * body样式
   */
  bodyStyle?: React.CSSProperties;
  /**
   * noData组件类名
   */
  noDataCls?: string;
  /**
   * noData组件样式
   */
  noDataStyle?: React.CSSProperties;
  /**
   * 是否加载中
   */
  loading?: boolean;
  /**
   * 阴影props，设置为false不显示
   */
  shadow?: false | ShadowProps;
  /**
   * 双行的高亮颜色
   */
  doubleColor?: string;
  /**
   * 文字对齐
   */
  align?: 'center' | 'between';
}

export default <T extends unknown>({
  dataSource,
  columns,
  bodyStyle,
  bodyCls,
  rowStyle,
  rowCls,
  headerStyle,
  headerCls,
  itemStyle,
  itemCls,
  className,
  noDataStyle,
  noDataCls,
  loading,
  doubleColor,
  shadow,
  align,
  ...props
}: Props<T>) => {
  const { brandPrimary } = ConfigProvider.useContainer();
  const isBetween = align === 'between';
  const getJustify = (i: number) =>
    isBetween
      ? i === 0
        ? 'flex-start'
        : i === (columns?.length || 0) - 1
        ? 'flex-end'
        : undefined
      : undefined;
  return (
    <NeedWrap wrap={Shadow as any} need={shadow !== false} wrapProps={shadow}>
      <View className={classNames(styles.table, className)} {...props}>
        <View className={classNames(styles.header, headerCls)}>
          {columns?.map(({ title }, i) => (
            <View
              key={i}
              className={classNames(styles.item, itemCls)}
              style={{
                justifyContent: getJustify(i),
              }}
            >
              {title}
            </View>
          ))}
        </View>
        <View className={classNames(styles.body, bodyCls)} style={bodyStyle}>
          {loading ? (
            <Loading type={'inline'} />
          ) : (
            <>
              {!dataSource?.length && (
                <NoData style={noDataStyle} className={noDataCls} />
              )}
              {dataSource?.map((item, i) => (
                <View
                  key={i}
                  className={classNames(styles.row, rowCls)}
                  style={{
                    ...rowStyle,
                    ...(i % 2
                      ? {
                          backgroundColor:
                            doubleColor ||
                            `rgba(${convert.hex
                              .rgb(brandPrimary)
                              .join(',')}, 0.1)`,
                        }
                      : undefined),
                  }}
                >
                  {columns?.map(({ dataIndex, render = v => v }, i) => (
                    <View
                      style={{ justifyContent: getJustify(i), ...itemStyle }}
                      className={classNames(styles.item, itemCls)}
                      key={i}
                    >
                      {render(item[dataIndex], item, i)}
                    </View>
                  ))}
                </View>
              ))}
            </>
          )}
        </View>
      </View>
    </NeedWrap>
  );
};
