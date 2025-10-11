"use client";

import { ReactNode } from "react";
import backIcon from "@/assets/icons/backIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function WithNavbarLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  return (
    <div>
      <div className="px-4 py-3" onClick={() => router.back()}>
        <Image src={backIcon} alt="< 뒤로가기" />
      </div>
      {children}
    </div>
  );
}
