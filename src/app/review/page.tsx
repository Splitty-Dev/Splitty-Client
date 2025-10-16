"use client";
import TextareaAutosize from "react-textarea-autosize";
import CloseButton from "@/components/close-button";
import samplePrf from "@/assets/icons/samplePrf.svg";
import Image from "next/image";
import RatingStar from "./_component_/rating-star";

const users = ["조아", "채영", "강현"];

export default function ReviewPage() {
  return (
    <div>
      <div className="relative flex flex-col gap-4">
        <div className="flex justify-center items-center py-[14px] border-b border-[#F2F2F2] relative">
          <div className="absolute left-4">
            <CloseButton />
          </div>
          <h2 className="typo-b18">리뷰 작성</h2>
        </div>
        <div className="flex py-3 gap-3 px-4">
          {users.map((u, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-[#DADADA]"
            >
              <Image src={samplePrf} alt={u} width={40} height={40} />
              <h4 className="typo-b14">{u}님</h4>
            </div>
          ))}
        </div>
        <RatingStar />
        <div className="px-4">
          <TextareaAutosize
            className="bg-[#F2F2F2] min-h-[165px] w-full px-[14px] py-2 focus:outline-none rounded-[4px]"
            placeholder="리뷰를 작성해주세요."
          />
        </div>
      </div>
      <div className="fixed bottom-0 bg-white flex  w-full typo-r12 items-center align-center px-4 pb-[29px] py-2 border-t border-[#F2F2F2] h-[80px] justify-end">
        <button className="typo-b14 px-[14px] py-2 bg-[#4F4DF8] text-[white] rounded-[4px]">
          리뷰 작성완료
        </button>
      </div>
    </div>
  );
}
