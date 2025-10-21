import Image from "next/image";

import likeIcon from "@/assets/icons/bigLikeIcon.svg";
import LikePopBtn from "@/components/like-pop-btn";

export default function ProductDetailBottomSection({
  price,
  rest,
}: {
  price: string;
  rest: number;
}) {
  return (
    <div className="fixed bottom-0 bg-white flex  w-full typo-r12 items-center align-center px-4 pb-[29px] py-2 border-t border-[#F2F2F2] h-[80px] justify-between">
      <div className="flex gap-4 items-center">
        <LikePopBtn />
        <div className="flex flex-col border-l pl-4 border-[#F2F2F2]">
          <p className="typo-b14">{`1개당 가격 ${price}`}</p>
          <p className="typo-b12 text-[#8C8C8C]">{`${rest}개 남음`}</p>
        </div>
      </div>
      <button className="typo-b14 px-[14px] py-2 bg-[#4F4DF8] text-[white] rounded-[4px]">
        참여하기
      </button>
    </div>
  );
}
