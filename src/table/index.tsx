import React from 'react';
import { View, ViewProps } from 'remax/one';
import styles from './index.module.less';
import ConfigProvider from '../config-provider';
import NoData from '../no-data';
import Loading from '../loading';
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
  ...props
}: Props<T>) => {
  const { brandPrimary } = ConfigProvider.useContainer();
  return (
    <View className={classNames(styles.table, className)} {...props}>
      <View className={classNames(styles.header, headerCls)}>
        {columns?.map(({ title }, i) => (
          <View key={i} className={classNames(styles.item, itemCls)}>
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
                        backgroundColor: `rgba(${convert.hex
                          .rgb(brandPrimary)
                          .join(',')}, 0.1)`,
                      }
                    : undefined),
                }}
              >
                {columns?.map(({ dataIndex, render = v => v }, i) => (
                  <View
                    style={itemStyle}
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
  );
};
