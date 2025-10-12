import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ItemBox({
  p,
}: {
  p: { id: number; thumbImg: StaticImageData; title: string; price: string };
}) {
  return (
    <Link href={`/product/${p.id}`} key={p.id} className="rounded-[4px] ">
      <Image
        src={p.thumbImg}
        alt={p.title}
        height={118}
        className="rounded-[4px] object-cover"
      />
      <p className="typo-r14 mt-[4px]">{p.title}</p>
      <p className="typo-r12 text-[#8C8C8C]">{p.price}원</p>
    </Link>
  );
}
