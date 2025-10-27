import { getWishList } from "@/app/api/product";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useCursorWishList = () => {
  return useInfiniteQuery({
    queryKey: ["wishlist"],
    queryFn: getWishList,
    initialPageParam: null,
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.nextCursor : undefined;
    },
  });
};
