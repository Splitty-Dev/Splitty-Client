import LikePopBtn from "@/components/like-pop-btn";

const statusInfo = {
  OPEN: { text: "참여하기", url: "" },
  CLOSED: { text: "모집완료", url: "" },
  COMPLETED: { text: "거래완료", url: "" },
  JOINED: { text: "참여중", url: "" },
};

export default function ProductDetailBottomSection({
  price,
  rest,
  goodsId,
  status,
}: {
  price: string;
  rest: number;
  goodsId: number;
  status: keyof typeof statusInfo;
}) {
  const currentStatus = statusInfo[status] ?? statusInfo.OPEN;
  const isDisabled = status === "CLOSED" || status === "COMPLETED";

  return (
    <div className="fixed bottom-0 bg-white flex  w-full typo-r12 items-center align-center px-4 pb-[29px] py-2 border-t border-[#F2F2F2] h-[80px] justify-between">
      <div className="flex gap-4 items-center">
        <LikePopBtn goodsId={goodsId} />
        <div className="flex flex-col border-l pl-4 border-[#F2F2F2]">
          <p className="typo-b14">{`1개당 가격 ${Number(
            price
          ).toLocaleString()}`}</p>
          <p className="typo-b12 text-[#8C8C8C]">{`${rest}개 남음`}</p>
        </div>
      </div>
      <button
        className={`typo-b14 px-[14px] py-2 rounded-[4px] ${
          isDisabled
            ? "bg-[#E0E0E0] text-[#A1A1A1] cursor-not-allowed"
            : "bg-[#4F4DF8] text-white hover:bg-[#3c3ae6]"
        }`}
        disabled={isDisabled}
      >
        {currentStatus.text}
      </button>
    </div>
  );
}
