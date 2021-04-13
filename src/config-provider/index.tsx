import createContainer from 'parsec-hooks/lib/createContainer';

export interface GlobalConfig {
  /**
   * 主题色
   */
  brandPrimary: string;
}

export default createContainer<GlobalConfig, GlobalConfig>(
  ({ brandPrimary = '#2780d9' } = {} as GlobalConfig) => ({ brandPrimary }),
);
