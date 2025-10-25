import { getProductAll } from "@/app/api/product";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCursorProducts = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProductAll,
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.nextCursor : undefined;
    },
  });
};
