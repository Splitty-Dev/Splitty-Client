import samplePrf from "@/assets/icons/samplePrf.svg";
import Image from "next/image";
import rateIcon from "@/assets/icons/starIcon.svg";
import orderIcon from "@/assets/icons/order.svg";
import bagIcon from "@/assets/icons/bigBagIcon.svg";
import gpsIcon from "@/assets/icons/gpsIcon.svg";

import { myPageMockData } from "@/mocks/sampleprf";

// interface MyPageProps {
//   //image
//   name: string;
//   location: string;
//   rating: number;
// }

export default function MyPage() {
  return (
    <div className="bg-[#F2F2F2] w-full h-[calc(100vh-47px)] mt-[-47px] pt-[47px] flex flex-col">
      <div className="typo-b18 pt-4 pb-[14px] px-4">마이페이지</div>
      <main className="flex flex-col gap-[14px]">
        <section className="bg-white mx-4 px-4 py-[14px] rounded-[10px] flex items-center justify-between ">
          <div className="flex gap-2 items-center">
            <Image src={samplePrf} alt="profile" width={40} height={40} />
            <div>
              <p className="typo-b14">{myPageMockData.name}</p>
              <p className="typo-r12 text-[#4F4F4F]">
                {myPageMockData.location}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-[2px]">
            <div className="flex text-[#4F4DF8] typo-b14">
              {myPageMockData.rating}
              <Image src={rateIcon} alt="rate" className="" />
            </div>
            <p className="text-[#8C8C8C] text-[10px]">신뢰도</p>
          </div>
        </section>
        <section className="bg-white mx-4 px-4 py-[14px] rounded-[10px] flex flex-col gap-[12px] typo-r14">
          <h2 className="typo-b12">나의 거래</h2>
          <div className="flex gap-4 items-center">
            <Image src={orderIcon} alt="판매내역" />
            <p>판매내역</p>
          </div>
          <div className="flex gap-4 items-center">
            <Image src={bagIcon} alt="구매내역" />
            <p>구매내역</p>
          </div>
        </section>
        <section className="bg-white mx-4 px-4 py-[14px] rounded-[10px] flex flex-col gap-[14px] typo-r14 ">
          <h2 className="typo-b12">설정</h2>
          <div className="flex gap-4 items-center">
            <Image src={gpsIcon} alt="위치설정" />
            <p>내 지역 설정</p>
          </div>
        </section>
      </main>
    </div>
  );
}
