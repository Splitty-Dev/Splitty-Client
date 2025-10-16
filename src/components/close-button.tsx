import Image from "next/image";
import closeIcon from "@/assets/icons/closeIcon.svg";
import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <Image src={closeIcon} alt="X" width={24} height={24} />
    </div>
  );
}
