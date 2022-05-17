import getVersion from '../get-version';

let envVersion = '';

getVersion().then(env => {
  envVersion = env;
});

export default <D extends unknown>(obj: {
  /**
   * 开发版变量
   */
  develop: D;
  /**
   * 体验版变量
   */
  trial?: D;
  /**
   * 正式版变量
   */
  release?: D;
}) => ((obj as any)[envVersion] || obj['develop']) as D;
