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
    <section className="relative aspect-square w-full overflow-hidden">
      <div
        className="flex overflow-x-auto snap-mandatory snap-x scrollbar-hide w-full  scroll-smooth gap-1"
        onScroll={handleScroll}
      >
        {imageUrls.map((url, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-full h-auto aspect-square"
          >
            <Image
              src={`https://splitty-bucket.s3.ap-northeast-2.amazonaws.com/${url}`}
              alt={productTitle}
              className="w-full h-full object-cover "
              width={800}
              height={800}
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
