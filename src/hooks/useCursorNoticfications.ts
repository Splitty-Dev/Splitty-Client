import { getNotifications } from "@/app/api/notice";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCursorNoticfications = () => {
  return useInfiniteQuery({
    queryKey: ["notifications"],
    queryFn: ({ pageParam }) => getNotifications(pageParam || {}),
    initialPageParam: {
      cursorId: null,
      cursorCreatedAt: null,
    },
    getNextPageParam: (lastPage) => {
      if (!lastPage.hasNext) return null;
      return {
        cursorId: lastPage.nextCursor?.lastId ?? null,
        cursorCreatedAt: lastPage.nextCursor?.lastCreatedAt ?? null,
      };
    },
  });
};
