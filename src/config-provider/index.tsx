import createContainer from 'parsec-hooks/lib/createContainer';
import React, { useState } from 'react';

export interface GlobalConfig {
  /**
   * 主题色
   */
  brandPrimary?: string;
  /**
   * 次要的主题色
   */
  brandAttract?: string;
  /**
   * 阴影组件的颜色
   */
  shadowColor?: string;
  /**
   * 阴影组件的半径，默认rpx单位
   * @default 20
   */
  shadowRadius?: number;
  /**
   * 适应老模式
   */
  elderly?: boolean;
  /**
   * 保留字段，防止sheet显示时input点击穿透时用的
   */
  isShowSheetPage?: string;
  /**
   * 保留字段，防止sheet显示时input点击穿透时用的
   */
  setIsShowSheetPage?: (showSheetPage: string) => void;
  /**
   * 全局控制渲染NoData组件，返回undefined则用默认的
   */
  renderNoData?: () => React.ReactNode;
  /**
   * 设计图宽度
   * @default 750
   */
  viewportWidth?: number;
}

export const {
  Provider: ConfigProvider,
  useContainer: useConfig,
} = createContainer<GlobalConfig, GlobalConfig>(
  (
    {
      brandPrimary = '#2780d9',
      brandAttract = '#ff9d46',
      shadowRadius = 20,
      ...config
    } = {} as GlobalConfig,
  ) => {
    const [isShowSheet, setIsShowSheet] = useState(false);
    return {
      brandPrimary,
      isShowSheet,
      shadowRadius,
      brandAttract,
      setIsShowSheet,
      ...config,
    };
  },
);

export const data = {
  viewportWidth: 750,
};

export default ({
  children,
  viewportWidth = 750,
  ...props
}: GlobalConfig & { children: React.ReactNode }) => {
  data.viewportWidth = viewportWidth;
  return (
    <ConfigProvider
      initialState={props}
      children={
        React.isValidElement(children)
          ? React.cloneElement(children, { ...children.props, ...props })
          : children
      }
    />
  );
};
