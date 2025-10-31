import sampleImg from "@/assets/imgs/sampleProduct.jpg";
import Image from "next/image";

export default function ConfirmItemBox({
  product,
}: {
  product: {
    name: string;
    price: number;
    currParticipants: number;
    imageUrlPrefix: string;
    imageName: string;
    neighName: string;
    quantity: number;
  };
}) {
  const imgUrl = product?.imageName
    ? product?.imageUrlPrefix + product?.imageName
    : sampleImg;
  return (
    <div
      className={`mx-4  py-4 flex gap-4 border-b border-[#F2F2F2] cursor-pointer`}
    >
      <Image
        src={imgUrl}
        alt={product?.name || ""}
        className="w-[80px] h-[80px] rounded-[4px] object-cover "
        width={80}
        height={80}
      />

      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-1">
          <h2 className="typo-r14">
            {product?.name} x {product?.quantity}
          </h2>
          <p className="typo-r12 text-[#8C8C8C]">{`${product?.neighName} ・ ${product?.currParticipants}명 참여중`}</p>
          <h3 className="text-[15px] font-bold">
            {product?.price.toLocaleString()}원
          </h3>
        </div>
      </div>
    </div>
  );
}
