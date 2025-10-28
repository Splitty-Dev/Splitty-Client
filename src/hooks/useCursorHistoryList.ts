import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { getMyPurchasesList, getMySalesList } from "@/app/api/member";
import { HistoryListResponse } from "@/types/history";

export const useCursorHistoryList = (
  kind: "sales" | "purchases",
  status: string
) => {
  const apiFunction = kind === "sales" ? getMySalesList : getMyPurchasesList;

  return useInfiniteQuery<
    HistoryListResponse,
    Error,
    InfiniteData<HistoryListResponse>,
    unknown[],
    { lastId: number | null; lastCreatedAt: string | null }
  >({
    queryKey: ["history", kind, status],
    queryFn: ({ pageParam }) =>
      apiFunction({
        status,
        lastId: pageParam?.lastId ?? null,
        lastCreatedAt: pageParam?.lastCreatedAt ?? null,
      }),
    initialPageParam: { lastId: null, lastCreatedAt: null },
    getNextPageParam: (lastPage) =>
      lastPage.hasNext
        ? {
            lastId: lastPage.nextCursor?.lastId ?? null,
            lastCreatedAt: lastPage.nextCursor?.lastCreatedAt ?? null,
          }
        : undefined,
  });
};
