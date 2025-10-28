"use client";

import samplePrf from "@/assets/icons/samplePrf.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import HistoryItemBox from "../_component_/item-box";
import { useCursorHistoryList } from "@/hooks/useCursorHistoryList";
import { InfiniteData } from "@tanstack/react-query";
import { HistoryListResponse } from "@/types/history";
import { productType } from "@/types/product";

const categories = [
  { label: "모집중", status: "OPEN" },
  { label: "모집완료", status: "CLOSED" },
  { label: "거래완료", status: "COMPLETED" },
];

const TITLE_MAP = {
  sales: "나의 판매내역",
  purchases: "나의 구매내역",
} as const;

export default function Page() {
  const { kind } = useParams<{ kind: "sales" | "purchases" }>();
  const title = TITLE_MAP[kind];
  const [category, setCategory] = useState(categories[0]);

  const { data, fetchNextPage, hasNextPage } = useCursorHistoryList(
    kind,
    category.status
  );

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

  const historyItems =
    (data as InfiniteData<HistoryListResponse>)?.pages.flatMap(
      (page) => page.items
    ) ?? [];

  return (
    <main>
      {/* Header */}
      <div className="py-[21px] flex justify-between items-center px-4">
        <h2 className="typo-b18">{title}</h2>
        <Image src={samplePrf} alt="profile" width={40} height={40} />
      </div>

      {/* Category Bar */}
      <div className="flex gap-2 py-3 typo-r12 px-4">
        {categories.map((cat) => (
          <div
            key={cat.status}
            className={`py-2 px-3 border border-[#F2F2F2] rounded-[100px] cursor-pointer ${
              cat.label === category.label ? "bg-black text-white" : "bg-white"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat.label}
          </div>
        ))}
      </div>

      <section>
        {historyItems.map((item: productType) => (
          <HistoryItemBox key={item.id} product={item} kind={kind} />
        ))}

        {hasNextPage && <div ref={observerRef} />}
      </section>
    </main>
  );
}
