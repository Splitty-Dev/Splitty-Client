"use client";
import { useState } from "react";

const CATEGORIES = {
  withAll: [
    "전체",
    "식품",
    "생활/주방",
    "뷰티/미용",
    "패션",
    "건강/운동",
    "유아/아동",
  ],

  withoutAll: [
    "식품",
    "생활/주방",
    "뷰티/미용",
    "패션",
    "건강/운동",
    "유아/아동",
  ],
};

export default function CategoryBar({
  isAll,
  onSelectCategory,
}: {
  isAll: boolean;
  onSelectCategory: (idx: number) => void;
}) {
  const categoryList = isAll ? CATEGORIES.withAll : CATEGORIES.withoutAll;
  const [category, setCategory] = useState<string>(categoryList[0]);

  return (
    <div className=" px-4 typo-r14 flex py-4 overflow-x-auto gap-2 whitespace-nowrap scroll-smooth [scrollbar-width:none] ">
      {categoryList.map((cat, idx) => (
        <div
          className={`py-2 px-3 border-[1px] border-[#F2F2F2] rounded-[100px] cursor-pointer ${
            cat === category ? "bg-[#000] text-white" : "bg-white"
          }`}
          key={idx}
          onClick={() => {
            setCategory(cat);
            if (isAll) {
              onSelectCategory(idx);
            } else {
              onSelectCategory(idx + 1);
            }
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
