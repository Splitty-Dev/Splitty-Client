import { apiFetch } from ".";

export const getProductDetail = async (goodsId: number) => {
  const res = await apiFetch(`/goods/${goodsId}`);
  return res.data;
};

export const getProductAll = async ({ pageParam = null }) => {
  const url = pageParam ? `/goods?cursorId=${pageParam}` : `/goods`;
  const res = await apiFetch(url);

  return {
    items: res.data.data,
    hasNext: res.data.hasNext,
    nextCursor: res.data.nextCursor?.lastId,
  };
};
