import Image from "next/image";

import gpsIcon from "@/assets/icons/gpsIcon.svg";

export default function MyLocation() {
  return (
    <section className="bg-white mx-4 px-4 py-[14px] rounded-[10px] flex flex-col gap-[14px] typo-r14 ">
      <h2 className="typo-b12">설정</h2>
      <div className="flex gap-4 items-center">
        <Image src={gpsIcon} alt="위치설정" />
        <p>내 지역 설정</p>
      </div>
    </section>
  );
}
