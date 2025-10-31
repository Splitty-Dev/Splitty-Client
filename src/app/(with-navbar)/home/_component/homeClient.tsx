"use client";
import searchIcon from "@/assets/icons/searchIcon.svg";
import noticeIcon from "@/assets/icons/noticeIcon.svg";
import Image from "next/image";

import ProductItem from "@/components/product-item";
import CategoryBar from "@/components/category-bar";
import Link from "next/link";
import { useCursorProducts } from "@/hooks/useCursorProducts";
import { useEffect, useRef, useState } from "react";
import { productType } from "../../../../types/product";
import { useQuery } from "@tanstack/react-query";
import { getMyInfo } from "../../../api/member";
import { useRouter, useSearchParams } from "next/navigation";

export default function HomeClient() {
  const params = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const token = params.get("accessToken");
    if (token) {
      localStorage.setItem("accessToken", token);
      router.replace("/home");
    }
  }, [params, router]);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
  const { data: myInfo } = useQuery({
    queryKey: ["me"],
    queryFn: getMyInfo,
    enabled: !!token,
  });

  const [categoryId, setCategoryId] = useState(0);
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useCursorProducts(categoryId);

  const observerRef = useRef<HTMLDivElement | null>(null);
  const isCalledNext = useRef(false);

  useEffect(() => {
    const node = observerRef.current;
    if (!node || !hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const target = entries[0];
        if (target.isIntersecting && !isCalledNext.current) {
          isCalledNext.current = true;
          fetchNextPage();
          obs.unobserve(target.target);
        }
      }
      // { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  useEffect(() => {
    isCalledNext.current = false;
  }, [data]);

  return (
    <div className="flex flex-col">
      <div className="fixed top-0 pt-[47px] w-full bg-white z-10">
        <div className="flex px-4 py-3 justify-between ">
          <div className="typo-b18 ">{myInfo?.neighName}</div>
          <div className=" h-6 flex gap-4">
            <Link href={`/search`}>
              <Image src={searchIcon} alt="search" width={24} height={24} />
            </Link>
            <Link href={`/notice`}>
              <Image src={noticeIcon} alt="notice" width={24} height={24} />
            </Link>
          </div>
        </div>
        <div className=" border-b border-[#F2F2F2]">
          <CategoryBar
            isAll={true}
            onSelectCategory={(id) => setCategoryId(id)}
          />
        </div>
      </div>

      <div className="pt-[125px] mb-14 flex flex-col">
        {data?.pages.map((page, pageIdx) => (
          <div key={pageIdx}>
            {page.items.map((product: productType) => (
              <ProductItem product={product} key={`${pageIdx}-${product.id}`} />
            ))}
          </div>
        ))}
        {hasNextPage && <div ref={observerRef} />}
      </div>
    </div>
  );
}
