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
  // likes: number;
  imageUrl: string;
}

export default function ProductItem({
  product,
  className = "",
}: {
  product: ProductItemProps;
  className?: string;
}) {
  return (
    <Link
      href={`/product/${product.id}`}
      className={`mx-4  py-4 flex gap-4 border-b border-[#F2F2F2] ${className} cursor-pointer`}
    >
      <Image
        src={product.imageUrl}
        alt={product.name}
        className="w-[110px] h-[110px] rounded-[4px] object-cover "
        width={110}
        height={110}
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-1">
          <h2 className="typo-r14">{product.name}</h2>
          <p className="typo-r12 text-[#8C8C8C]">{`${product.neighName} ・ ${product.currParticipants}명 참여중`}</p>
          <h3 className="text-[15px] font-bold">{product.price}원</h3>
        </div>
        <div className="flex justify-end typo-r12 text-[#8C8C8C] items-center gap-[2px]">
          <Image src={bagIcon} alt="bag" />
          {product.price}
          <Image src={likeIcon} alt="like" className="pl-[2px]" />
          {/* {product.likes} api에 없음 */}3
        </div>
      </div>
    </Link>
  );
}
