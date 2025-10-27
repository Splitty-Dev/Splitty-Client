import Image from "next/image";
import samplePrf from "@/assets/icons/samplePrf.svg";
import rateIcon from "@/assets/icons/staricon.svg";
import Link from "next/link";

export default function SellerInfo({
  info,
}: {
  info: {
    profileImageUrl: string | null;
    username: string;
    neighName: string;
    rating: number;
    id: number;
  };
}) {
  const userPrfImg = info?.profileImageUrl || samplePrf;
  return (
    <div className="flex justify-between  py-4 border-b border-[#F2F2F2] ">
      <Link
        href={`/sellerDetail/${info?.id}`}
        className="flex gap-2 items-center"
      >
        <Image
          src={userPrfImg}
          alt={info?.username || ""}
          width={40}
          height={40}
          className="rounded-[100px] object-cover"
        />
        <div className=" flex flex-col gap-1">
          <h4 className="typo-b14">{info?.username}</h4>
          <p className="text-[#4F4F4F]">{info?.neighName}</p>
        </div>
      </Link>
      <div className="flex flex-col items-end">
        <div className=" flex items-center text-[#4F4DF8] typo-b14">
          <span>{info?.rating}</span>
          <Image src={rateIcon} alt="rate" />
        </div>
        <p className="typo-r10 text-[#8C8C8C]">신뢰도</p>
      </div>
    </div>
  );
}
