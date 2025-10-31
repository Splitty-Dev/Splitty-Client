import { searchProducts } from "@/app/api/search";
import { useInfiniteQuery } from "@tanstack/react-query";

interface SearchPageParam {
  keyword: string;
  cursorId: number | null;
  cursorCreatedAt: string | null;
}

export const useSearchProducts = (keyword: string) => {
  return useInfiniteQuery({
    queryKey: ["searchGoods", keyword],
    queryFn: ({ pageParam }: { pageParam: SearchPageParam }) =>
      searchProducts(pageParam),
    initialPageParam: {
      keyword,
      cursorId: null,
      cursorCreatedAt: null,
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? null,
    enabled: !!keyword,
  });
};
