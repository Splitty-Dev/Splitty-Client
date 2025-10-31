import { apiFetch } from ".";

export const getTradeQuantity = async (goodsId: number) => {
  const res = await apiFetch(`/trade/${goodsId}/quantity`);
  return res.data;
};
