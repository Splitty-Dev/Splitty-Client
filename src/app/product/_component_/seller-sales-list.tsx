"use client";
import nextIcon from "@/assets/icons/product_next.svg";

import Image from "next/image";
import ItemBox from "./itemBox";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { useCursorMemberSales } from "../../../hooks/useCursorMemberSales";

export default function SellerSalesList({
  sellerInfo,
}: {
  sellerInfo: { id: number; username: string };
}) {
  const [memberId, setMemberId] = useState<number>(0);
  useEffect(() => {
    if (!sellerInfo) return;
    setMemberId(sellerInfo?.id);
  }, [sellerInfo]);

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
    <section className="mx-4 py-4 gap-4 flex flex-col">
      <div className="flex justify-between items-center">
        <h3 className="typo-b14">{sellerInfo?.username}님의 판매 상품</h3>
        <Link href={`/sellerDetail/${sellerInfo?.id}`}>
          <Image src={nextIcon} alt="더보기" width={12} height={12} />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        {data?.pages.map((page, pageIdx) => (
          <div key={pageIdx}>
            {page.items.map(
              (product: {
                id: number;
                imageName: string;
                name: string;
                price: number;
                imageUrlPrefix: string;
              }) => (
                <ItemBox
                  p={{
                    id: product?.id,
                    thumbImg: product?.imageUrlPrefix + product?.imageName,
                    title: product?.name,
                    price: product?.price,
                  }}
                  key={product?.id}
                />
              )
            )}
          </div>
        ))}
        <div ref={observerRef} />
      </div>
    </section>
  );
}
