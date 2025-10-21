import { apiFetch } from ".";

export const getProductDetail = async (goodsId: number) => {
  const res = await apiFetch(`/goods/${goodsId}`);
  return res.data;
};
