import Image from "next/image";
import homeWhite from "@/assets/icons/homeWhite.svg";
import backWhite from "@/assets/icons/backWhite.svg";
import rateIcon from "@/assets/icons/staricon.svg";
import personIcon from "@/assets/icons/product_person.svg";
import locationIcon from "@/assets/icons/product_location.svg";
import nextIcon from "@/assets/icons/product_next.svg";

import { sampleProduct, sellingProducts } from "@/mocks/sampleProduct";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="-mt-[47px] typo-r12 relative mb-[80px]">
      <div className="absolute top-[47px] left-4 z-11 flex gap-4">
        <Image src={backWhite} alt="back" width={24} height={24} />
        <Image src={homeWhite} alt="home" width={20} height={20} />
      </div>
      <section>
        <div className="flex overflow-x-auto snap-mandatory snap-x scrollbar-hide w-full h-[385px] relative">
          {sampleProduct.imageUrl.map((url, idx) => (
            <Image
              src={url}
              alt={sampleProduct.title}
              className="w-full h-[385px] object-cover"
              key={idx}
            />
          ))}
          <div className="shadow-[180deg_rgba(0,0,0,0.00)0%_rgba(0,0,0,0.40)100%] z-10 w-full absolute bottom-0">
            shadow ---
          </div>
        </div>
      </section>
      <section className="mx-4 ">
        {/* 판매자 정보 */}
        <div className="flex justify-between  py-4 border-b border-[#F2F2F2] ">
          <div className="flex gap-2 items-center">
            <Image
              src={sampleProduct.sellerInfo.userPrf}
              alt={sampleProduct.sellerInfo.userName}
              width={40}
              height={40}
            />
            <div className=" flex flex-col gap-1">
              <h4 className="typo-b14">{sampleProduct.sellerInfo.userName}</h4>
              <p className="text-[#4F4F4F]">
                {sampleProduct.sellerInfo.location}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className=" flex items-center text-[#4F4DF8] typo-b14">
              <span>{sampleProduct.sellerInfo.rating}</span>
              <Image src={rateIcon} alt="rate" />
            </div>
            <p className="typo-r10 text-[#8C8C8C]">신뢰도</p>
          </div>
        </div>
        {/* 상세정보 */}
        <div className="py-4 gap-4 flex flex-col border-b border-[#F2F2F2]  ">
          <div className="flex flex-col gap-1">
            <h2 className="typo-b18">{sampleProduct.title}</h2>
            <p className="typo-r12 text-[#8C8C8C]">{sampleProduct.category}</p>
          </div>
          <div className="typo-r12">
            <p className="flex gap-1">
              <Image src={personIcon} alt="person" />
              {`${sampleProduct.people}명 참여중`}
            </p>
            <p className="flex gap-1">
              <Image src={locationIcon} alt="location" />
              {`${sampleProduct.tradePlace}`}
            </p>
          </div>
          <div className="typo-r14">{sampleProduct.description}</div>
          <div className="text-[#8C8C8C]">{`관심 ${sampleProduct.likes} · 조회 311`}</div>
        </div>
      </section>
      <section className="mx-4 py-4 gap-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="typo-b14">
            {sampleProduct.sellerInfo.userName}님의 판매 상품
          </h3>
          <Image src={nextIcon} alt="더보기" width={12} height={12} />
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {sellingProducts.map((p) => (
            <div key={p.id} className="rounded-[4px] ">
              <Image
                src={p.thumbImg}
                alt={p.title}
                height={118}
                className="rounded-[4px] object-cover"
              />
              <p className="typo-r14 mt-[4px]">{p.title}</p>
              <p className="typo-r12 text-[#8C8C8C]">{p.price}원</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
