"use client";
import samplePrf from "@/assets/icons/samplePrf.svg";
import ProductItem from "@/components/product-item";
import { mock } from "@/mocks/mock";

import Image from "next/image";
import { useParams } from "next/navigation";

import { useState } from "react";

const categories = ["모집중", "모집완료", "거래완료"];

const TITLE_MAP = {
  sales: "나의 판매내역",
  purchases: "나의 구매내역",
} as const;

export default function Page() {
  const { kind } = useParams<{ kind: "sales" | "purchases" }>();
  const title = TITLE_MAP[kind];

  const [category, setCategory] = useState("모집중");

  return (
    <main className="">
      <div className=" py-[21px] flex justify-between items-center px-4">
        <h2 className="typo-b18">{title}</h2>
        <Image src={samplePrf} alt="profile" width={40} height={40} />
      </div>
      <div className=" flex gap-2 py-3 typo-r12 px-4">
        {categories.map((cat, idx) => (
          <div
            className={`py-2 px-3 border-[1px] border-[#F2F2F2] rounded-[100px] cursor-pointer ${
              cat === category ? "bg-[#000] text-white" : "bg-white"
            }`}
            key={idx}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </div>
        ))}
      </div>
      <section>
        {mock.map((m) => (
          <ProductItem product={m} key={m.id} />
        ))}
      </section>
    </main>
  );
}
