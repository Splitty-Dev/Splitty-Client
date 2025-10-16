"use client";

import Image from "next/image";

import camIcon from "@/assets/icons/camIcon.svg";
import CategoryBar from "@/components/category-bar";

import TextareaAutosize from "react-textarea-autosize";
import UploadBottomSection from "./_component_/upload-bottom-section";
import { useState } from "react";
import CloseButton from "@/components/close-button";

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
  const [inputList, setInputList] = useState({
    title: "",
    totalPrice: "",
    totalNum: 1,
    sellingNum: 0,
    description: "",
    meetingPlace: "",
  });

  const totalPriceNum = Number(inputList.totalPrice);
  const totalNumNum = Number(inputList.totalNum);

  const oneProductPrice =
    totalPriceNum && totalNumNum ? (totalPriceNum / totalNumNum).toFixed(0) : 0;

  const [images, setImages] = useState<File[]>([]);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages((prev) => [...prev, ...newFiles]);
    }
  };
  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative pt-[47px] pb-[80px]">
      <UploadBottomSection price={`${oneProductPrice}원`} />
      <div className="px-4 py-3 fixed top-0 h-[95px] w-full bg-[white] pt-[47px] items-center flex border-b border-[#F2F2F2] ">
        <CloseButton />
      </div>
      <section className="pl-4 py-3 px-4 flex gap-2">
        <label
          htmlFor="upload"
          className="w-[60px] h-[60px] border border-[#F2F2F2] rounded-[4px] flex justify-center items-center cursor-pointer"
        >
          <Image src={camIcon} alt="사진 추가" width={24} height={24} />
        </label>
        <input
          id="upload"
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImageChange}
        />

        {/* 미리보기 */}
        {images.map((file, index) => (
          <div key={index} className="relative w-[60px] h-[60px]">
            <Image
              src={URL.createObjectURL(file)}
              alt={`uploaded-${index}`}
              width={60}
              height={60}
              className="object-cover rounded-[4px] w-full h-full"
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="absolute top-0 right-0 bg-black bg-opacity-50 text-white rounded-full w-4 h-4 text-[10px]"
            >
              ×
            </button>
          </div>
        ))}
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
                className={`px-[14px] py-[10px] border-[1px] border-[#F2F2F2] rounded-[4px]  focus:outline-none focus:border-[#999] ${
                  isTextArea ? "min-h-[75px]" : ""
                }`}
                onChange={(e) =>
                  setInputList((prev) => ({
                    ...prev,
                    [Object.keys(inputList)[idx]]: e.target.value,
                  }))
                }
              />
            </div>
          );
        })}
      </form>
    </div>
  );
}
