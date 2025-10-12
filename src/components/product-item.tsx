// mock
//     id: 1,
//     title: "에코 생수 500ml",
//     location: "미아동",
//     people: 2,
//     price: 1600,
//     //
//     currNums: 3,
//     totalNums: 5,
//     //
//     likes: 5,

// sample image
import sampleImg from "@/assets/imgs/sampleProduct.jpg";

import Image from "next/image";
import bagIcon from "@/assets/icons/bagIcon.svg";
import likeIcon from "@/assets/icons/likeIcon.svg";
import Link from "next/link";

interface ProductItemProps {
  id: number;
  title: string;
  location: string;
  people: number;
  price: string; //string ???
  currNums: number;
  totalNums: number;
  likes: number;
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
        src={sampleImg}
        alt={product.title}
        className="w-[110px] h-[110px] rounded-[4px] object-cover "
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-1">
          <h2 className="typo-r14">{product.title}</h2>
          <p className="typo-r12 text-[#8C8C8C]">{`${product.location} ・ ${product.people}명 참여중`}</p>
          <h3 className="text-[15px] font-bold">{product.price}원</h3>
        </div>
        <div className="flex justify-end typo-r12 text-[#8C8C8C] items-center gap-[2px]">
          <Image src={bagIcon} alt="bag" />
          {`${product.currNums}/${product.totalNums}`}
          <Image src={likeIcon} alt="like" className="pl-[2px]" />
          {product.likes}
        </div>
      </div>
    </Link>
  );
}
