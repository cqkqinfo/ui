import { setClipboard } from 'remax/ali';

export type Options = my.ISetClipboardOptions;
export default (options?: Options & { data: string }) =>
  setClipboard({
    text: options?.data || '',
  });
