"use client";

import ProductItem from "@/components/product-item";
import { useCursorMemberSales } from "@/hooks/useCursorMemberSales";
import { useEffect, useRef, useState } from "react";

export default function SalesProduct({ sellerId }: { sellerId: number }) {
  const [memberId, setMemberId] = useState<number>(0);

  useEffect(() => {
    if (!sellerId) return;
    setMemberId(sellerId);
  }, [sellerId]);

  const observerRef = useRef<HTMLDivElement | null>(null);
  const isCalledNext = useRef(false);

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useCursorMemberSales(memberId!);

  useEffect(() => {
    const node = observerRef.current;
    if (!node || !hasNextPage || isFetchingNextPage) return;

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
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);
  useEffect(() => {
    isCalledNext.current = false;
  }, [data]);

  return (
    <div className="py-[14px]">
      <h2 className="typo-b12 px-4 ">판매상품</h2>
      {/* {mock.slice(0, 3).map((m) => (
        <ProductItem product={m} key={m.id} />
      ))} */}
      {data?.pages.map((page, pageIdx) => (
        <div key={pageIdx}>
          {page.items.map(
            (product: {
              id: number;
              name: string;
              neighName: string;
              currParticipants: number;
              price: number;
              totalWishlist: number;
              imageName: string | null;
              status: "OPEN" | "CLOSED" | "COMPLETED";
              quantity: number;
              leftQuantity: number;
            }) => (
              <ProductItem product={product} key={product?.id} />
            )
          )}
        </div>
      ))}
    </div>
  );
}
