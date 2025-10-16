"use client";
import backIcon from "@/assets/icons/backIcon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BackBkBtn() {
  const router = useRouter();

  return (
    <div onClick={() => router.back()}>
      <Image src={backIcon} alt="< 뒤로가기" width={24} height={24} />
    </div>
  );
}
