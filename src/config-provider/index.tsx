import createContainer from 'parsec-hooks/lib/createContainer';

export interface GlobalConfig {
  /**
   * 主题色
   */
  brandPrimary?: string;
  /**
   * 阴影组件的颜色
   */
  shadowColor?: string;
}

export default createContainer<GlobalConfig, GlobalConfig>(
  ({ brandPrimary = '#2780d9', ...config } = {} as GlobalConfig) => ({
    brandPrimary,
    ...config,
  }),
);
