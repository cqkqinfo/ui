import React, { useState, useMemo, useCallback } from 'react';
import { View } from 'remax/one';
import Icon from '../icon';
import { IconFontNames } from '../icon/other';
import { useConfig } from '../config-provider';
import styles from './index.module.less';
import useViewLayout from '../use-view-layout';

interface Props {
  /**
   * 当前评分值
   */
  value?: number;
  /**
   * 初始值
   */
  defaultValue?: number;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 图标间距
   */
  gutter?: string;
  /**
   * 图标大小
   */
  size?: string | number;
  /**
   * 评分变化回调
   */
  onChange?: (val: number) => void;
  /**
   * icon图标的名字
   * @default 'kq-xingxing'
   */
  iconName?: IconFontNames;
  /**
   * 最大评分
   * @default 5
   */
  maxValue?: number;
  /**
   * 评分选中颜色
   * @default 主题色
   */
  activeColor?: string;
  /**
   * 评分未选中颜色
   * @default #ccc
   */
  defaultColor?: string;
  /**
   *
   * 自定义样式
   *
   */
  renderItem?: (params: {
    /**
     * 当前是否选中
     */
    actived?: boolean;
    /**
     * 当前的序号从0 开始
     */
    index: number;
    maxValue: number;
  }) => React.ReactElement;
}

export default ({
  value,
  onChange,
  activeColor,
  defaultColor = '#ccc',
  defaultValue = 0,
  gutter = '0.4em',
  size,
  disabled,
  maxValue = 5,
  iconName = 'kq-xingxing',
  renderItem,
}: Props) => {
  const [innerVal, setInnerVal] = useState<number>(defaultValue);
  const { brandPrimary } = useConfig();

  const showVal = useMemo(() => (value !== undefined ? value : innerVal), [
    value,
    innerVal,
  ]);

  const handleChange = useCallback(
    (num: number) => {
      if (disabled) {
        return;
      }
      setInnerVal(num);
      onChange?.(num);
    },
    [setInnerVal, onChange, disabled],
  );

  const renderNode = useCallback(
    props => {
      if (renderItem) {
        const renderNode = renderItem(props);
        return React.cloneElement(renderNode)
          ? React.cloneElement(renderNode, {
              ...renderNode.props,
              key: props.index,
              onTap: (...args: any) => {
                renderNode.props.onTap?.(...args);
                handleChange(props.index + 1);
              },
            })
          : void 0;
      }
    },
    [renderItem, handleChange],
  );
  const { width: rateWidth = 0, ...rateArg } = useViewLayout();
  const renderRateArr = (actived = false) =>
    new Array(maxValue).fill(1).map((_, index) => {
      const itemStyle = {
        marginRight: index !== maxValue - 1 ? gutter : 0,
      };
      if (renderItem) {
        const result = renderNode({
          index,
          maxValue,
          actived,
        });
        return React.isValidElement(result)
          ? React.cloneElement(result, {
              style: {
                ...itemStyle,
                ...result.props.style,
              },
            })
          : result;
      }
      return (
        <View {...(actived ? {} : rateArg)}>
          <Icon
            key={index}
            size={size}
            name={iconName}
            style={itemStyle}
            onTap={() => handleChange(index + 1)}
            color={actived ? activeColor || brandPrimary : defaultColor}
          />
        </View>
      );
    });

  const { width: wrapWidth = 0, ...arg } = useViewLayout();
  const guttersWidth = (wrapWidth - rateWidth * maxValue) / (maxValue - 1);

  return (
    <View className={styles.wrap}>
      {renderRateArr()}
      <View
        className={styles.placeHolder}
        style={{
          width: showVal * rateWidth + parseInt(showVal + '') * guttersWidth,
        }}
      >
        <View className={styles.wrap} {...arg}>
          {renderRateArr(true)}
        </View>
      </View>
    </View>
  );
};
