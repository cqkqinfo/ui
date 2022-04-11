import { getClipboard } from 'remax/ali';

export default () => getClipboard().then(({ text }) => ({ data: text }));
