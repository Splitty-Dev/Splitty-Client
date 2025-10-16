"use client";
import CloseButton from "@/components/close-button";
import { smapleNoticeList } from "@/mocks/sampleNoticeList";
import NoticeItemBox from "./_component_/notice-item-box";

export default function NoticePage() {
  return (
    <div>
      <div className="px-4 py-3 fixed top-0 h-[95px] w-full bg-[white] pt-[47px] flex flex-col   ">
        <CloseButton />
        <h2 className="py-[21px] border-b border-[#F2F2F2] typo-b18">
          알림내역
        </h2>
      </div>
      <div className="pt-[100px] pb-[40px] px-4 ">
        {smapleNoticeList.map((n) => (
          <NoticeItemBox key={n.id} {...n} />
        ))}
      </div>
    </div>
  );
}
