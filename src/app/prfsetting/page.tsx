import samplePrf from "@/assets/icons/samplePrf.svg";
import Image from "next/image";

export default function PrfSetting() {
  return (
    <div className="justify-center flex flex-col items-center w-full relative">
      <h2 className="typo-b18 py-3 ">프로필 설정하기</h2>
      <div className="w-30 h-30  mt-[83px]">
        <Image src={samplePrf} alt="프로필" width={120} height={120} />
      </div>
      <input
        placeholder="닉네임을 입력해주세요(10자) "
        className="border-b typo-r14 w-[165px] py-1 focus:outline-none border-[#DADADA] mt-[30px]"
      />
      <div className="fixed bottom-0 bg-white flex  w-full typo-r12 items-center align-center px-4 pb-[29px] py-2 border-t border-[#F2F2F2] h-[80px] justify-end">
        <button className="typo-b14 px-[14px] py-2 bg-[#4F4DF8] text-[white] rounded-[4px]">
          설정완료
        </button>
      </div>
    </div>
  );
}
