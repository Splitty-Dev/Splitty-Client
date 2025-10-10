import sampleImg from "@/assets/imgs/sampleProduct.jpg";

import Image from "next/image";
import peopleIcon from "@/assets/icons/peopleSmallIcon.svg";

interface ChatListItemProps {
  title: string;
  people: number;
  //image
  lastMessage: string;
  lastMessageTime: string;
}

export default function ChatListItem({
  chatListData,
  className = "",
}: {
  chatListData: ChatListItemProps;
  className?: string;
}) {
  return (
    <div
      className={`mx-4  py-4 flex gap-4 border-b border-[#F2F2F2] ${className}`}
    >
      <Image
        src={sampleImg}
        alt={chatListData.title}
        className="w-[40px] h-[40px] rounded-[100px] object-cover "
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex gap-[2px]">
          <h2 className="typo-b14 pr-[2px]">{chatListData.title}</h2>
          <Image src={peopleIcon} alt="people" className="w-[16px] h-[16px]" />
          <p className="typo-r12 text-[#8C8C8C]">{`${chatListData.people}명・${chatListData.lastMessageTime}일 전`}</p>
        </div>
        <p className="typo-r14">{chatListData.lastMessage}</p>
      </div>
    </div>
  );
}
