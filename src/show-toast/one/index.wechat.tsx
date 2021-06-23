import { showToast } from 'remax/wechat';

export interface Options {
  title: string;
  icon?: 'success' | 'none';
  mask?: boolean;
  duration?: number;
}

export default (options: Options) => showToast(options);
