import searchIcon from "@/assets/icons/searchIcon.svg";
import noticeIcon from "@/assets/icons/noticeIcon.svg";
import Image from "next/image";
import { mock } from "@/mocks/mock";
import ProductItem from "@/components/product-item";

const categories = [
  "전체",
  "식품",
  "생활/주방",
  "뷰티/미용",
  "패션",
  "건강/운동",
  "유아/아동",
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 pt-[47px] w-full bg-white z-10">
        <div className="flex px-4 py-3 justify-between ">
          <div className="typo-b18 ">미아동</div>
          <div className=" h-6 flex gap-4">
            <Image src={searchIcon} alt="search" width={24} height={24} />
            <Image src={noticeIcon} alt="notice" width={24} height={24} />
          </div>
        </div>
        <div className=" px-4 typo-r14 flex py-4 overflow-x-auto gap-2 whitespace-nowrap scroll-smooth [scrollbar-width:none] border-b border-[#F2F2F2]">
          {categories.map((cat, idx) => (
            <div
              className="py-2 px-3 border-[1px] border-[#F2F2F2] rounded-[100px] "
              key={idx}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-[125px]">
        {mock.map((m) => (
          <ProductItem
            product={m}
            key={m.id}
            className={m.id === mock.length ? "mb-14" : ""}
          />
        ))}
      </div>
    </div>
  );
}
