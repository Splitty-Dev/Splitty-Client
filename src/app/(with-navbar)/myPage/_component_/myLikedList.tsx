import Image from "next/image";
import likeIcon from "@/assets/icons/myLikedIcon.svg";

export default function MyLikedList() {
  return (
    <section className="bg-white mx-4 px-4 py-[14px] rounded-[10px] flex flex-col gap-[14px] typo-r14 ">
      <h2 className="typo-b12">나의 관심</h2>
      <div className="flex gap-4 items-center">
        <Image src={likeIcon} alt="위치설정" />
        <p>관심목록</p>
      </div>
    </section>
  );
}
