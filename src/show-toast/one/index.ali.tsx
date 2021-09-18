import { showToast } from 'remax/ali';

export interface Options {
  title: string;
  icon?: 'success' | 'none';
  mask?: boolean;
  duration?: number;
}

export default (options: Options) =>
  showToast({
    content: options.title,
    type: options.icon,
    duration: options.duration,
  });
