import { apiFetch } from ".";

export const getProductDetail = async (goodsId: number) => {
  const res = await apiFetch(`/goods/${goodsId}`);
  return res.data;
};

export const getProductAll = async ({
  pageParam,
}: {
  pageParam?: { lastId: number | null; categoryId: number };
}) => {
  const queryParams = new URLSearchParams();
  queryParams.set("categoryId", String(pageParam?.categoryId ?? 0));
  if (pageParam?.lastId) queryParams.set("cursorId", String(pageParam.lastId));

  const url = `/goods?${queryParams.toString()}`;
  const res = await apiFetch(url);

  return {
    items: res.data.data,
    hasNext: res.data.hasNext,
    nextCursor: res.data.nextCursor?.lastId,
  };
};

export const getWishList = async ({
  pageParam,
}: {
  pageParam?: { lastId: number; lastCreatedAt: string } | null;
}) => {
  const queryParams = new URLSearchParams();
  if (pageParam?.lastId) {
    queryParams.set("cursorId", String(pageParam.lastId));
  }
  if (pageParam?.lastCreatedAt) {
    queryParams.set("cursorCreatedAt", pageParam.lastCreatedAt);
  }
  const queryString = queryParams.toString();
  const url = `/wishlist${queryString ? `?${queryString}` : ""}`;
  const res = await apiFetch(url);
  return {
    items: res.data.data,
    hasNext: res.data.hasNext,
    nextCursor: res.data.nextCursor,
  };
};
