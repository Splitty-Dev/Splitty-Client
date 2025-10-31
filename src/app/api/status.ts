import { apiFetch } from ".";

export const confirmTradeQuantity = (
  goodsId: number,
  quantities: { memberId: number; quantity: number }[]
) => {
  return apiFetch(`/trade/confirm-quantity`, {
    method: "PATCH",
    body: JSON.stringify({ goodsId, quantities }),
  });
};

export const changeTradeStatus = (
  goodsId: number,
  tradeStatus: "OPEN" | "CLOSED" | "COMPLETED"
) => {
  return apiFetch(`/trade/change-status`, {
    method: "PATCH",
    body: JSON.stringify({ goodsId, tradeStatus }),
  });
};
