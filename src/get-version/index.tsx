export const envVersion = /localhost/.test(window.location.host)
  ? 'develop'
  : /^(tih)/.test(window.location.host)
  ? 'trial'
  : 'release';

export default (undefined as any) as 'develop' | 'trial' | 'release';
