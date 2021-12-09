import getObject from './getObject';

export default async (
  page: number,
  limit: number,
  state = 1,
  search?: string,
) => {
  let list: any[] = [];
  await Promise.all(
    new Array(limit).fill(0).map(async (_, index) => ({
      ...(await getObject()),
      search,
      id: index + limit * (page - 1),
      state,
    })),
  ).then(data => (list = data));
  return Promise.resolve({
    pageNum: page + 1,
    pageSize: limit,
    total: 1000,
    list,
  });
};
