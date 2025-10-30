"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import homeIcon from "@/assets/icons/homeIcon.svg";
import homeIcon2 from "@/assets/icons/homeIcon_2.svg";

import uploadIcon from "@/assets/icons/addIcon.svg";

import chatIcon from "@/assets/icons/chatIcon.svg";
import chatIcon2 from "@/assets/icons/chatIcon_2.svg";

import mypageIcon from "@/assets/icons/myPageIcon.svg";
import mypageIcon2 from "@/assets/icons/myPageIcon_2.svg";

export default function BottomNav() {
  const pathname = usePathname() || "/";

  const isHome = pathname === "/";

  const isChat = pathname.startsWith("/chat");
  const isMy = pathname.startsWith("/myPage");

  return (
    <div className="fixed bottom-0 bg-white flex justify-around w-full typo-r12 items-center align-center  pb-[29px] py-2 border-t border-[#F2F2F2]">
      <Link href={`/home`} className="flex flex-col items-center gap-1">
        <Image
          src={isHome ? homeIcon2 : homeIcon}
          alt="home"
          width={24}
          height={24}
        />
        <span>홈</span>
      </Link>
      <Link href={`/upload`} className="flex flex-col items-center gap-1">
        <Image src={uploadIcon} alt="upload" width={24} height={24} />
        <span>등록</span>
      </Link>
      <Link href={`/chatList`} className="flex flex-col items-center gap-1">
        <Image
          src={isChat ? chatIcon2 : chatIcon}
          alt="chat"
          width={24}
          height={24}
        />
        <span>채팅</span>
      </Link>
      <Link href={`/myPage`} className="flex flex-col items-center gap-1">
        <Image
          src={isMy ? mypageIcon2 : mypageIcon}
          alt="myPage"
          width={24}
          height={24}
        />
        <span>마이페이지</span>
      </Link>
    </div>
  );
}
