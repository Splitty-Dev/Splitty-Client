import { ReactNode } from "react";

import Image from "next/image";

import homeIcon from "@/assets/icons/homeIcon.svg";
import homeIcon2 from "@/assets/icons/homeIcon_2.svg";

import uploadIcon from "@/assets/icons/addIcon.svg";

import chatIcon from "@/assets/icons/chatIcon.svg";
import chatIcon2 from "@/assets/icons/chatIcon_2.svg";

import mypageIcon from "@/assets/icons/myPageIcon.svg";
import mypageIcon2 from "@/assets/icons/myPageIcon_2.svg";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      {children}
      <div className="fixed bottom-0 bg-white flex justify-around w-full typo-r12 items-center align-center  pb-[29px] py-2 border-t border-[#F2F2F2]">
        <div className="flex flex-col items-center gap-1">
          <Image src={homeIcon2} alt="home" width={24} height={24} />
          <span>홈</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image src={uploadIcon} alt="upload" width={24} height={24} />
          <span>등록</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image src={chatIcon} alt="chat" width={24} height={24} />
          <span>채팅</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image src={mypageIcon} alt="myPage" width={24} height={24} />
          <span>마이페이지</span>
        </div>
      </div>
    </div>
  );
}
