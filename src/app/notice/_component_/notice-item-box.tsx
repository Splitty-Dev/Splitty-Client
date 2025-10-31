import { formatTimeAgo } from "@/hooks/formatTImeAgo";
import Image from "next/image";

export default function NoticeItemBox({
  body,
  title,
  createdAt,
  imageName,
  imageUrlPrefix,
}: {
  body: string;
  title: string;
  createdAt: string;
  imageName: string;
  imageUrlPrefix: string;
}) {
  const imgUrl = imageName && imageUrlPrefix + imageName;
  return (
    <div className="flex gap-3 py-3 border-b border-[#F2F2F2] h-auto">
      <Image
        src={imgUrl}
        alt="img"
        width={50}
        height={50}
        className="rounded-[4px] object-cover aspect-square"
      />
      <div className="flex justify-between w-full ">
        <div className="flex flex-col">
          <h4 className="typo-b14">{title}</h4>
          <p className="typo-r12">{body}</p>
        </div>
        <div className="typo-r10 text-[#8C8C8C] min-w-[27px]">
          {formatTimeAgo(createdAt)}
        </div>
      </div>
    </div>
  );
}
