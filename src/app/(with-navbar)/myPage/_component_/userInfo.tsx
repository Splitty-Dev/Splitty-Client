import { myPageMockData } from "@/mocks/sampleprf";

import rateIcon from "@/assets/icons/starIcon.svg";
import samplePrf from "@/assets/icons/samplePrf.svg";
import Image from "next/image";

export default function UserInfo() {
  return (
    <section className="bg-white mx-4 px-4 py-[14px] rounded-[10px] flex items-center justify-between ">
      <div className="flex gap-2 items-center">
        <Image src={samplePrf} alt="profile" width={40} height={40} />
        <div className="flex flex-col gap-[2px]">
          <p className="typo-b14">{myPageMockData.name}</p>
          <p className="typo-r12 text-[#4F4F4F]">{myPageMockData.location}</p>
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
  );
}
