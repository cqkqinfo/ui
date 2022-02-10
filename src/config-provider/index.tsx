import createContainer from 'parsec-hooks/lib/createContainer';
import React, { useState } from 'react';

export interface GlobalConfig {
  /**
   * 主题色
   */
  brandPrimary?: string;
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
}

export const {
  Provider: ConfigProvider,
  useContainer: useConfig,
} = createContainer<GlobalConfig, GlobalConfig>(
  (
    {
      brandPrimary = '#2780d9',
      shadowRadius = 20,
      ...config
    } = {} as GlobalConfig,
  ) => {
    const [isShowSheet, setIsShowSheet] = useState(false);
    return {
      brandPrimary,
      isShowSheet,
      shadowRadius,
      setIsShowSheet,
      ...config,
    };
  },
);

export default ({
  children,
  ...props
}: GlobalConfig & { children: React.ReactNode }) => (
  <ConfigProvider
    initialState={props}
    children={
      React.isValidElement(children)
        ? React.cloneElement(children, { ...children.props, ...props })
        : children
    }
  />
);
