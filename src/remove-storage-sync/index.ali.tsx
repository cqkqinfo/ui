import { removeStorageSync } from 'remax/ali';

export default (key: string) => removeStorageSync({ key });
