"use client";

import Image from "next/image";
import closeIcon from "@/assets/icons/closeIcon.svg";
import camIcon from "@/assets/icons/camIcon.svg";

import { useRouter } from "next/navigation";
import CategoryBar from "@/components/category-bar";

import TextareaAutosize from "react-textarea-autosize";

const formInputs = [
  { label: "상품명", placeHolder: "물품명을 적어주세요." },
  { label: "총 가격", placeHolder: "총 가격을 적어주세요." },
  { label: "수량", placeHolder: "총 수량을 선택해주세요." },
  { label: "판매 수량", placeHolder: "판매를 원하는 수량을 선택해주세요." },
  { label: "설명", placeHolder: "설명을 적어주세요." },
  {
    label: "거래 희망 장소",
    placeHolder: "거래 희망 장소 설명을 적어주세요.",
  },
];

export default function UploadPage() {
  const router = useRouter();
  return (
    <div className="relative pt-[47px]">
      <div
        className="px-4 py-3 fixed top-0 h-[95px] w-full bg-[white] pt-[47px] items-center flex border-b border-[#F2F2F2] "
        onClick={() => router.back()}
      >
        <Image src={closeIcon} alt="X" width={24} height={24} />
      </div>
      <section className="pl-4 py-3 px-4 ">
        <div className="w-15 h-15 border-[1px] rounded-[4px] border-[#F2F2F2] flex justify-center items-center">
          <Image src={camIcon} alt="사진" width={24} height={24} />
        </div>
      </section>
      <CategoryBar isAll={false} />
      <form className="px-4">
        {formInputs.map((f, idx) => {
          const isTextArea = idx === 4;
          const Tag = isTextArea ? TextareaAutosize : "input";
          return (
            <div key={idx} className="flex flex-col gap-3  py-3 ">
              {f.label}
              <Tag
                placeholder={f.placeHolder}
                className="px-[14px] py-[10px] border-[1px] border-[#F2F2F2] rounded-[4px]  focus:outline-none focus:border-[#999]"
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
