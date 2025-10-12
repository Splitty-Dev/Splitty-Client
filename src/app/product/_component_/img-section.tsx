"use client";
import Image, { StaticImageData } from "next/image";
import DotIndicator from "./img-dot-indicator";
import { useState } from "react";

export default function ImgSection({
  productTitle,
  imageUrls,
}: {
  productTitle: string;
  imageUrls: StaticImageData[];
}) {
  const [CurrImg, setCurrImg] = useState(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, clientWidth } = e.currentTarget;
    const index = Math.round(scrollLeft / clientWidth);
    setCurrImg(index);
  };

  return (
    <section className="relative">
      <div
        className="flex overflow-x-auto snap-mandatory snap-x scrollbar-hide w-full h-[385px] scroll-smooth gap-1"
        onScroll={handleScroll}
      >
        {imageUrls.map((url, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-full h-[385px] "
          >
            <Image
              src={url}
              alt={productTitle}
              className="w-full h-full oject-cover "
            />
          </div>
        ))}
      </div>
      {/* 이미지 하단 */}
      <div className="bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_100%)]  w-full absolute bottom-0 h-[38px] flex justify-center items-center gap-2 ">
        {imageUrls.map((_, idx) => (
          <div className={`w-[6px] h-[6px]`} key={idx}>
            <DotIndicator active={idx === CurrImg} />
          </div>
        ))}
      </div>
    </section>
  );
}
