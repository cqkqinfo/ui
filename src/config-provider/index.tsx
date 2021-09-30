import createContainer from 'parsec-hooks/lib/createContainer';
import React from 'react';

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
   * 适应老模式
   */
  elderly?: boolean;
}

export const {
  Provider: ConfigProvider,
  useContainer: useConfig,
} = createContainer<GlobalConfig, GlobalConfig>(
  ({ brandPrimary = '#2780d9', ...config } = {} as GlobalConfig) => ({
    brandPrimary,
    ...config,
  }),
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
