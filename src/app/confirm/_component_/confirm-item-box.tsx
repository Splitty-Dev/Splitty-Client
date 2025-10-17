import { sampleProduct } from "@/mocks/sampleProduct";
import sampleImg from "@/assets/imgs/sampleProduct.jpg";
import Image from "next/image";

export default function ConfirmItemBox() {
  return (
    <div
      className={`mx-4  py-4 flex gap-4 border-b border-[#F2F2F2] cursor-pointer`}
    >
      <Image
        src={sampleImg}
        alt={sampleProduct.title}
        className="w-[80px] h-[80px] rounded-[4px] object-cover "
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-1">
          <h2 className="typo-r14">{sampleProduct.title}</h2>
          <p className="typo-r12 text-[#8C8C8C]">{`${sampleProduct.sellerInfo.location} ・ ${sampleProduct.people}명 참여중`}</p>
          <h3 className="text-[15px] font-bold">{sampleProduct.price}원</h3>
        </div>
      </div>
    </div>
  );
}
