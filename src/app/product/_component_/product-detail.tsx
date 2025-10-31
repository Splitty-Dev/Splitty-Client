"use client";
import Image from "next/image";
import homeWhite from "@/assets/icons/homeWhite.svg";
import homebk from "@/assets/icons/homebkBig.svg";
import nextIcon from "@/assets/icons/product_next.svg";
import personIcon from "@/assets/icons/product_person.svg";
import locationIcon from "@/assets/icons/product_location.svg";

import { sellingProducts } from "@/mocks/sampleProduct";

import Link from "next/link";
import BackBtn from "../../../components/backBtn";
import ItemBox from "../_component_/itemBox";
import SellerInfo from "../_component_/seller-section";
import ImgSection from "../_component_/img-section";
import ProductDetailBottomSection from "../_component_/bottom-section";
import { getHasJoined, getProductDetail } from "@/app/api/product";
import { useQuery } from "@tanstack/react-query";
import BackBkBtn from "@/components/back-bk-btn";
import { useEffect, useState } from "react";

export default function ProductDetailClient({ id }: { id: number }) {
  const goodsId = id;
  const { data: product } = useQuery({
    queryKey: ["goodsId", goodsId],
    queryFn: () => getProductDetail(goodsId),
  });

  const [status, setStatus] = useState<
    "OPEN" | "JOINED" | "CLOSED" | "COMPLETED"
  >(product?.status ?? "OPEN");

  const { data } = useQuery({
    queryKey: ["hasJoined", goodsId],
    queryFn: () => getHasJoined(goodsId),
    refetchOnMount: true,
  });

  useEffect(() => {
    if (product?.status === "COMPLETED") {
      setStatus("COMPLETED");
    } else if (data?.hasJoined === true) {
      setStatus("JOINED");
    } else {
      setStatus(product?.status);
    }
  }, [data, product?.status]);

  const isBlank = !product?.images || product.images.length == 0;

  return (
    <div className="-mt-[47px] typo-r12 relative mb-[80px]">
      {/* 하단 고정 바 */}
      <div className="absolute top-[47px] left-4 z-11 flex gap-4">
        {isBlank ? <BackBkBtn /> : <BackBtn />}
        <Link href={`/home`} className="flex ">
          <Image
            src={isBlank ? homebk : homeWhite}
            alt="home"
            width={20}
            height={20}
          />
        </Link>
      </div>
      {/* 사진영역 */}
      <ImgSection
        productTitle={product?.name}
        imageUrls={product?.imageName || []}
      />
      {/* 정보영역 */}
      <section className="mx-4 ">
        {/* 1- 판매자 정보 */}
        <SellerInfo info={product?.seller} />
        {/* 2- 상세정보 */}
        <div className="py-4 gap-4 flex flex-col border-b border-[#F2F2F2]  ">
          <div className="flex flex-col gap-1">
            <h2 className="typo-b18">{product?.name}</h2>
            <p className="typo-r12 text-[#8C8C8C]">{product?.category}</p>
          </div>
          <div className="typo-r12">
            <p className="flex gap-1">
              <Image src={personIcon} alt="person" />
              {`${product?.currParticipants}명 참여중`}
            </p>
            <p className="flex gap-1">
              <Image src={locationIcon} alt="location" />
              {`${product?.preferredLocation}`}
            </p>
          </div>
          <div className="typo-r14">{product?.description}</div>
          <div className="text-[#8C8C8C]">{`관심 ${product?.totalWishlist} · 조회 ${product?.viewCount}`}</div>
        </div>
      </section>
      {/* 판매상품 목록*/}
      <section className="mx-4 py-4 gap-4 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="typo-b14">
            {product?.seller?.username}님의 판매 상품
          </h3>
          <Link href={`/sellerDetail/${product?.seller?.id}`}>
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
        price={product?.unitPrice}
        rest={product?.leftQuantity}
        goodsId={goodsId}
        status={status}
      />
    </div>
  );
}
