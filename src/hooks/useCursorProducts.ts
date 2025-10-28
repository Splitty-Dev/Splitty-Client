import { getProductAll } from "@/app/api/product";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCursorProducts = (categoryId: number) => {
  return useInfiniteQuery({
    queryKey: ["products", categoryId],
    queryFn: ({ pageParam }) =>
      getProductAll({
        pageParam: pageParam ?? { lastId: null, categoryId },
      }),
    initialPageParam: { lastId: null, categoryId },
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext
        ? {
            lastId: lastPage.nextCursor?.lastId ?? null,
            categoryId: categoryId,
          }
        : undefined;
    },
  });
};
