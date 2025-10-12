import Image from "next/image";

import rateIcon from "@/assets/icons/staricon.svg";
import Link from "next/link";

export default function SellerInfo({
  info,
}: {
  info: {
    userPrf: string;
    userName: string;
    location: string;
    rating: number;
    userId: number;
  };
}) {
  return (
    <div className="flex justify-between  py-4 border-b border-[#F2F2F2] ">
      <Link
        href={`/sellerDetail/${info.userId}`}
        className="flex gap-2 items-center"
      >
        <Image src={info.userPrf} alt={info.userName} width={40} height={40} />
        <div className=" flex flex-col gap-1">
          <h4 className="typo-b14">{info.userName}</h4>
          <p className="text-[#4F4F4F]">{info.location}</p>
        </div>
      </Link>
      <div className="flex flex-col items-end">
        <div className=" flex items-center text-[#4F4DF8] typo-b14">
          <span>{info.rating}</span>
          <Image src={rateIcon} alt="rate" />
        </div>
        <p className="typo-r10 text-[#8C8C8C]">신뢰도</p>
      </div>
    </div>
  );
}
