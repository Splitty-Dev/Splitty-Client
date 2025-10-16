"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import backWhite from "@/assets/icons/backWhite.svg";

export default function BackBtn() {
  const router = useRouter();
  return (
    <Image
      src={backWhite}
      alt="back"
      width={24}
      height={24}
      onClick={() => router.back()}
    />
  );
}
