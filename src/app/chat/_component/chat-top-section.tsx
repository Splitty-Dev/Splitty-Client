import { summaryProductInfo } from "@/app/api/chat";
import BackBkBtn from "@/components/back-bk-btn";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import sampleImg from "@/assets/imgs/sampleProduct.jpg";

export default function ChatTopSection({ goodsId }: { goodsId: number }) {
  const queryKey = ["productSummary", goodsId];
  const queryFn = () => summaryProductInfo(goodsId);
  const { data } = useQuery({ queryKey, queryFn });

  const imgUrl =
    data?.imageUrlPrefix && data?.imageName
      ? `${data.imageUrlPrefix}${data.imageName}`
      : sampleImg;

  const categories = {
    OPEN: "모집중",
    CLOSED: "모집완료",
    COMPLETED: "거래완료",
  } as const;

  return (
    <div className="px-4 py-3 flex items-center gap-[10px] pt-[30px]">
      <BackBkBtn />
      <div className="rounded-[4px] w-10 h-10 overflow-hidden">
        <Image
          src={imgUrl}
          alt={data?.name ?? ""}
          width={40}
          height={40}
          className="object-cover"
        />
      </div>

      <div>
        <div className="flex text-[#000000] gap-1">
          <p className="typo-b14 ">
            {categories[(data?.status ?? "OPEN") as keyof typeof categories]}
          </p>
          <p className="typo-r14">{data?.name}</p>
        </div>
        <div className="typo-b12 text-[#8C8C8C]">
          {data?.leftQuantity}개 남음
        </div>
      </div>
    </div>
  );
}
