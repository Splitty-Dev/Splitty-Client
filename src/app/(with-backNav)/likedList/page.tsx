"use client";

import ProductItem from "@/components/product-item";
import { useCursorWishList } from "@/hooks/useCursorWishList";
import { useEffect, useRef } from "react";

export default function LikedListPage() {
  const { data, fetchNextPage, hasNextPage } = useCursorWishList();

  const observerRef = useRef<HTMLDivElement | null>(null);
  const isCalledNext = useRef(false);

  useEffect(() => {
    const node = observerRef.current;
    if (!node || !hasNextPage) return;

    const observer = new IntersectionObserver((entries, obs) => {
      const target = entries[0];
      if (target.isIntersecting && !isCalledNext.current) {
        isCalledNext.current = true;
        fetchNextPage();
        obs.unobserve(target.target);
      }
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    isCalledNext.current = false;
  }, [data]);

  const allProducts = data?.pages.flatMap((page) => page.items) || [];

  return (
    <div>
      <h2 className="typo-b18 px-4 py-3">관심목록</h2>
      <div className="flex flex-col">
        {allProducts.map((product, index) => (
          <ProductItem
            key={product.id}
            product={product}
            className={index === allProducts.length - 1 ? "mb-14" : ""}
            isLikedList={true}
          />
        ))}

        {hasNextPage && <div ref={observerRef} />}
      </div>
    </div>
  );
}
