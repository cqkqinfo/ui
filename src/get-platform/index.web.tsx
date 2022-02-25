import isWx from '../is-wx';

export default process.env.REMAX_PLATFORM || isWx
  ? 'web'
  : window.innerWidth > 1000
  ? 'pc'
  : 'web';
