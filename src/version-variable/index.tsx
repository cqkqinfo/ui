import { envVersion } from '../get-version';

export default <D extends unknown>(obj: {
  /**
   * 开发版变量
   */
  develop: Partial<D>;
  /**
   * 体验版变量
   */
  trial?: Partial<D>;
  /**
   * 正式版变量
   */
  release?: Partial<D>;
}) => obj[envVersion] || obj['develop'];
