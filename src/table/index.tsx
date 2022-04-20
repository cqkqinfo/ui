import React from 'react';
import { ViewProps } from 'remax/one';
import styles from './index.module.less';
import { useConfig } from '../config-provider';
import NoData from '../no-data';
import Loading from '../loading';
import Shadow, { Props as ShadowProps } from '../shadow';
import NeedWrap from '../need-wrap';
import Space from '../space';
import classNames from 'classnames';
import rpxToPx from '../rpx-to-px';
const convert = require('color-convert');

export type DataSource<T> = T[];
export const ColumnType = ({}: Column<any>) => {};
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
   * 列的宽度
   * @default flex: 1
   */
  width?: number;
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
  const { brandPrimary } = useConfig();
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
      <Space className={classNames(styles.table, className)} {...props}>
        <Space className={classNames(styles.header, headerCls)}>
          {columns?.map(({ title, width }, i) => (
            <Space
              key={i}
              className={classNames(styles.item, itemCls)}
              style={{
                flex: width ? undefined : 1,
                justifyContent: getJustify(i),
                width: width && rpxToPx(width),
              }}
            >
              {title}
            </Space>
          ))}
        </Space>
        <Space className={classNames(styles.body, bodyCls)} style={bodyStyle}>
          {loading ? (
            <Loading type={'inline'} />
          ) : (
            <>
              {!dataSource?.length && (
                <NoData style={noDataStyle} className={noDataCls} />
              )}
              {dataSource?.map((item, i) => (
                <Space
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
                  {columns?.map(({ dataIndex, render = v => v, width }, i) => (
                    <Space
                      style={{
                        justifyContent: getJustify(i),
                        flex: width ? undefined : 1,
                        width: width && rpxToPx(width),
                        ...itemStyle,
                      }}
                      className={classNames(styles.item, itemCls)}
                      key={i}
                    >
                      {render(item[dataIndex], item, i)}
                    </Space>
                  ))}
                </Space>
              ))}
            </>
          )}
        </Space>
      </Space>
    </NeedWrap>
  );
};
