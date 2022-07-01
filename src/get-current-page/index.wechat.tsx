import qs from 'qs';

export default () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { route, query } = getCurrentPages()[getCurrentPages().length - 1] || {
    query: {},
  };
  return `${route}${
    Object.keys(query).length ? `?${qs.stringify(query)}` : ''
  }`;
};
