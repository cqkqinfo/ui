import { envVersion } from '../get-version';

export default <D extends unknown>(obj: {
  /**
   * 开发版变量
   */
  develop: D;
  /**
   * 体验版变量
   */
  trial: D;
  /**
   * 正式版变量
   */
  release: D;
}) => obj[envVersion];
