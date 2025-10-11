import Image from "next/image";

import orderIcon from "@/assets/icons/order.svg";
import bagIcon from "@/assets/icons/bigBagIcon.svg";
import Link from "next/link";

export default function MyHistory() {
  return (
    <section className="bg-white mx-4 px-4 py-[14px] rounded-[10px] flex flex-col gap-[12px] typo-r14">
      <h2 className="typo-b12">나의 거래</h2>
      <Link href={`/history/sales`} className="flex gap-4 items-center">
        <Image src={orderIcon} alt="판매내역" />
        <p>판매내역</p>
      </Link>
      <Link href={`/history/purchases`} className="flex gap-4 items-center">
        <Image src={bagIcon} alt="구매내역" />
        <p>구매내역</p>
      </Link>
    </section>
  );
}
