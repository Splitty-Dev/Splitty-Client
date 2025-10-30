import sampleImg from "@/assets/imgs/sampleProduct.jpg";
import Image from "next/image";
import bagIcon from "@/assets/icons/bagIcon.svg";
import likeIcon from "@/assets/icons/likeIcon.svg";
import Link from "next/link";

interface ProductItemProps {
  id: number;
  name: string;
  neighName: string;
  currParticipants: number;
  price: number;
  totalWishlist: number;
  imageName: string | null;
  status: "OPEN" | "CLOSED" | "COMPLETED";
  quantity: number;
  leftQuantity: number;
}

const IMAGE_BASE_URL =
  "https://splitty-bucket.s3.ap-northeast-2.amazonaws.com/";

export default function ProductItem({
  product,
  className = "",
}: {
  product: ProductItemProps;
  className?: string;
}) {
  const imageUrl = product.imageName
    ? `${IMAGE_BASE_URL}${product.imageName}`
    : sampleImg;

  return (
    <Link
      href={`/product/${product.id}`}
      className={`mx-4  py-4 flex gap-4 border-b border-[#F2F2F2] ${className} cursor-pointer`}
    >
      <Image
        // src={`${IMAGE_BASE_URL}${`390c95c1-340c-4986-8f71-c7d4059a05cd.jpg`}`}
        src={imageUrl}
        alt={product.name}
        className="w-[110px] h-[110px] rounded-[4px] object-cover "
        width={110}
        height={110}
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-1">
          <h2 className="typo-r14">{product.name}</h2>
          <p className="typo-r12 text-[#8C8C8C]">{`${product.neighName} ・ ${product.currParticipants}명 참여중`}</p>
          <h3 className="text-[15px] font-bold">
            {product.price.toLocaleString()}원
          </h3>
          {product.status === "COMPLETED" && (
            <p className="text-[10px] py-1 px-[17.5px] rounded-[4px] bg-[#000] text-[white] font-sm w-[72px] h-[18px] flex items-center">
              거래완료
            </p>
          )}
        </div>
        <div className="flex justify-end typo-r12 text-[#8C8C8C] items-center gap-[2px]">
          <Image src={bagIcon} alt="bag" />
          {product.leftQuantity}/{product.quantity}
          <Image src={likeIcon} alt="like" className="pl-[2px]" />
          {product.totalWishlist}
        </div>
      </div>
    </Link>
  );
}
