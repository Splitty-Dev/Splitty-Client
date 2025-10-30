import sampleImg from "@/assets/imgs/sampleProduct.jpg";

import Image from "next/image";
import peopleIcon from "@/assets/icons/peopleSmallIcon.svg";
import { formatTimeAgo } from "@/hooks/formatTImeAgo";

interface ChatListItemProps {
  name: string;
  currParticipants: number;
  imageName: string;
  lastMessage: string;
  updatedAt: string;
}

export default function ChatListItem({
  chatListData,
  className = "",
}: {
  chatListData: ChatListItemProps;
  className?: string;
}) {
  const IMAGE_BASE_URL =
    "https://splitty-bucket.s3.ap-northeast-2.amazonaws.com/";

  const imageUrl = chatListData.imageName
    ? `${IMAGE_BASE_URL}${chatListData.imageName}`
    : sampleImg;

  return (
    <div
      className={`mx-4  py-4 flex gap-4 border-b border-[#F2F2F2] ${className}`}
    >
      <Image
        src={imageUrl}
        alt={chatListData.name}
        width={40}
        height={40}
        className="w-[40px] h-[40px] rounded-[100px] object-cover "
      />
      <div className="flex flex-col justify-between flex-1 ">
        <div className="flex justify-between ">
          <div className="flex gap-[2px]">
            <h2 className="typo-b14 pr-[2px]">{chatListData.name}</h2>
            <p className="typo-r14 text-[#8C8C8C]">
              {chatListData.currParticipants}
            </p>
          </div>
          <p className="typo-r12 text-[#8C8C8C]">
            {formatTimeAgo(chatListData.updatedAt)}
          </p>
        </div>
        <p className="typo-r14">{chatListData.lastMessage}</p>
      </div>
    </div>
  );
}
