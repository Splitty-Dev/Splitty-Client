"use client";

import ChatListItem from "@/components/chat-list-item";
import { sampleChatList } from "@/mocks/sampleChatList";
import { useState } from "react";

const categories = ["판매", "구매"];

export default function ChatPage() {
  const [selectedCat, setSelectedCat] = useState(categories[0]);
  return (
    <div className="flex flex-col">
      <div className="fixed top-0 pt-[47px] w-full bg-white z-10">
        <div className="flex px-4 py-3 justify-between ">
          <div className="typo-b18 ">채팅</div>
        </div>
        <div className=" px-4 typo-r14 flex py-4 overflow-x-auto gap-2 whitespace-nowrap scroll-smooth [scrollbar-width:none] border-b border-[#F2F2F2]">
          {categories.map((cat, idx) => (
            <div
              className={`py-2 px-3 border-[1px] border-[#F2F2F2] rounded-[100px] cursor-pointer ${
                selectedCat === cat
                  ? "bg-[#000] text-white"
                  : "text-[#000] bg-white"
              }`}
              key={idx}
              onClick={() => setSelectedCat(cat)}
            >
              {cat}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-[125px]">
        {sampleChatList.map((c) => (
          <ChatListItem
            chatListData={c}
            key={c.id}
            className={c.id === sampleChatList.length ? "mb-14" : ""}
          />
        ))}
      </div>
    </div>
  );
}
