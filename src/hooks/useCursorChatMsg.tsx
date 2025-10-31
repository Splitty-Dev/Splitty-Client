import { getChatMessages } from "@/app/api/chat";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCursorChatMsg = (goodsId: number) => {
  return useInfiniteQuery({
    queryKey: ["chatMessages", goodsId],
    queryFn: ({ pageParam }) =>
      getChatMessages(
        goodsId,
        pageParam?.lastId ?? null,
        pageParam?.createdAt ?? null
      ),
    initialPageParam: { lastId: null, createdAt: null },
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext
        ? {
            lastId: lastPage.nextCursor.id ?? null,
            createdAt: lastPage.nextCursor.createdAt ?? null,
          }
        : undefined;
    },
  });
};
