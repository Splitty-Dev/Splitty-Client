import { getMemberSalesList } from "@/app/api/member";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCursorMemberSales = (memberId: number) => {
  return useInfiniteQuery({
    queryKey: ["memberSalesList", memberId],
    queryFn: ({ pageParam }) =>
      getMemberSalesList({
        pageParam: pageParam ?? { lastId: null, memberId },
      }),
    initialPageParam: { lastId: null, memberId },
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext
        ? {
            lastId: lastPage.nextCursor ?? null,
            memberId: memberId,
          }
        : undefined;
    },
  });
};
