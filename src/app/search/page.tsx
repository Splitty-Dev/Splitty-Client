import clock from "@/assets/icons/searchClock.svg";
import close from "@/assets/icons/searchClose.svg";
import Image from "next/image";

const recentList = ["에코 생수 500ml", "에코 생수 100ml"];

export default function SearchPage() {
  return (
    <div>
      <div className="flex justify-between px-4 py-3">
        <h2 className="typo-b14">최근검색</h2>
        <button className="typo-r10 text-[#8C8C8C]">전체 삭제</button>
      </div>
      <div className="flex gap-2 flex-col">
        {recentList.map((recent, idx) => (
          <div key={idx} className="flex px-4 gap-2 ">
            <Image src={clock} alt="최근" width={16} height={16} />
            <p className="flex-1 typo-r14 text-[#757575]">에코 생수 500ml</p>
            <Image src={close} alt="삭제" width={15} height={15} />
          </div>
        ))}
      </div>
    </div>
  );
}
