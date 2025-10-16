import Image from "next/image";
import homeWhite from "@/assets/icons/homeWhite.svg";
import nextIcon from "@/assets/icons/product_next.svg";
import personIcon from "@/assets/icons/product_person.svg";
import locationIcon from "@/assets/icons/product_location.svg";

import { sampleProduct, sellingProducts } from "@/mocks/sampleProduct";

import Link from "next/link";
import BackBtn from "../../../components/backBtn";
import ItemBox from "../_component_/itemBox";
import SellerInfo from "../_component_/seller-section";
import ImgSection from "../_component_/img-section";
import ProductDetailBottomSection from "../_component_/bottom-section";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <div className="-mt-[47px] typo-r12 relative mb-[80px]">
      {/* 하단 고정 바 */}
      <div className="absolute top-[47px] left-4 z-11 flex gap-4">
        <BackBtn />
        <Link href={`/`}>
          <Image src={homeWhite} alt="home" width={20} height={20} />
        </Link>
      </div>
      {/* 사진영역 */}
      <ImgSection
        productTitle={sampleProduct.title}
        imageUrls={sampleProduct.imageUrl}
      />
      {/* 정보영역 */}
      <section className="mx-4 ">
        {/* 1- 판매자 정보 */}
        <SellerInfo info={sampleProduct.sellerInfo} />
        {/* 2- 상세정보 */}
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
      {/* 판매상품 목록*/}
      <section className="mx-4 py-4 gap-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="typo-b14">
            {sampleProduct.sellerInfo.userName}님의 판매 상품
          </h3>
          <Link href={`/sellerDetail/${sampleProduct.sellerInfo.userId}`}>
            <Image src={nextIcon} alt="더보기" width={12} height={12} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {sellingProducts.map((p) => {
            const data = {
              id: p.id,
              thumbImg: p.thumbImg,
              title: p.title,
              price: p.price,
            };
            return <ItemBox p={data} key={p.id} />;
          })}
        </div>
      </section>
      <ProductDetailBottomSection
        price={sampleProduct.price}
        rest={sampleProduct.totalNums - sampleProduct.currNums}
      />
    </div>
  );
}
