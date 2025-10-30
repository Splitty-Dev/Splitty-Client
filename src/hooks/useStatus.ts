import { apiFetch } from "@/app/api";
import { useMutation } from "@tanstack/react-query";

export function useJoinTrade() {
  return useMutation({
    mutationFn: async ({
      goodsId,
      quantity,
    }: {
      goodsId: number;
      quantity: number;
    }) =>
      apiFetch(`/trade`, {
        method: "POST",
        body: JSON.stringify({ goodsId, quantity }),
      }),
    onSuccess: () => {
      alert("거래에 성공적으로 참여했습니다!");
    },
    onError: (error) => {
      console.error(error);
      alert("참여에 실패했습니다. 다시 시도해주세요.");
    },
  });
}
