import Image from "next/image";
import Link from "next/link";
import sampleImg from "@/assets/imgs/sampleProduct.jpg";
import bagIcon from "@/assets/icons/bagIcon.svg";
import likeIcon from "@/assets/icons/likeIcon.svg";
import { productType } from "@/types/product";

const btnsList = {
  sales: {
    OPEN: { label: "모집완료" },
    CLOSED: { label: "거래 및 수량 확정" },
    COMPLETED: { label: "리뷰 작성하기" },
  },
  purchases: {
    OPEN: { label: "거래 나가기" },
    CLOSED: null,
    COMPLETED: { label: "리뷰 작성하기" },
  },
} as const satisfies Record<
  "sales" | "purchases",
  Partial<Record<"OPEN" | "CLOSED" | "COMPLETED", { label: string } | null>>
>;

export default function HistoryItemBox({
  product,
  className = "",
  kind,
}: {
  product: productType;
  className?: string;
  kind: "sales" | "purchases";
}) {
  const currParticipants =
    product.currParticipants == -1 ? 1 : product.currParticipants;
  return (
    <div
      className={`mx-4  py-4 flex flex-col gap-4 border-b border-[#F2F2F2] ${className} cursor-pointer`}
    >
      <Link href={`/product/${product.id}`} className={` flex gap-4 `}>
        <Image
          src={sampleImg}
          alt={product.name}
          className="w-[110px] h-[110px] rounded-[4px] object-cover "
        />
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-1">
            <h2 className="typo-r14">{product.name}</h2>
            <p className="typo-r12 text-[#8C8C8C]">{`${product.neighName} ・ ${currParticipants}명 참여중`}</p>
            <h3 className="text-[15px] font-bold">{product.price}원</h3>
          </div>
          <div className="flex justify-end typo-r12 text-[#8C8C8C] items-center gap-[2px]">
            <Image src={bagIcon} alt="bag" />
            {product.price}원
            <Image src={likeIcon} alt="like" className="pl-[2px]" />
            {/* {product.likes} */}
          </div>
        </div>
      </Link>
      <div className="typo-b12 gap-2 flex">
        <button className="bg-[#F2F2F2] w-full rounded-[4px] py-2">
          채팅보기
        </button>

        {btnsList[kind]?.[product.status] && (
          <button className="bg-[#F2F2F2] w-full rounded-[4px] py-2">
            {btnsList[kind]?.[product.status]?.label}
          </button>
        )}
      </div>
    </div>
  );
}
