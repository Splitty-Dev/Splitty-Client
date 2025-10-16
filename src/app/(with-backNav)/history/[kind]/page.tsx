"use client";
import samplePrf from "@/assets/icons/samplePrf.svg";
import { mock } from "@/mocks/mock";

import Image from "next/image";
import { useParams } from "next/navigation";

import { useState } from "react";
import HistoryItemBox from "../_component_/item-box";

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

  return (
    <main className="">
      <div className=" py-[21px] flex justify-between items-center px-4">
        <h2 className="typo-b18">{title}</h2>
        <Image src={samplePrf} alt="profile" width={40} height={40} />
      </div>
      <div className=" flex gap-2 py-3 typo-r12 px-4">
        {categories.map((cat) => (
          <div
            className={`py-2 px-3 border-[1px] border-[#F2F2F2] rounded-[100px] cursor-pointer ${
              cat.label === category.label ? "bg-[#000] text-white" : "bg-white"
            }`}
            key={cat.status}
            onClick={() => setCategory(cat)}
          >
            {cat.label}
          </div>
        ))}
      </div>
      <section>
        {mock
          .filter((e) => e.status === category.status)
          .map((m) => (
            <HistoryItemBox product={m} key={m.id} kind={kind} />
          ))}
      </section>
    </main>
  );
}
