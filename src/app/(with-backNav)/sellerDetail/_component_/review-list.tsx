import samplePrf from "@/assets/icons/samplePrf.svg";
import { sampleReview } from "@/mocks/sampleReview";
import Image from "next/image";

export default function ReviewList() {
  return (
    <div className="px-4 py-[18px] flex flex-col gap-3 border-b border-[#F2F2F2]">
      <h2 className="typo-b12 ">받은 거래후기</h2>
      {sampleReview.map((r, index) => (
        <div key={index} className="flex gap-3">
          <Image src={samplePrf} alt={r.reviewerName} />
          <div className="flex flex-col ">
            <div className="flex items-center gap-1">
              <p className="typo-b12">{r.reviewerName}</p>
              <p className="typo-r10">{r.postTime}</p>
            </div>
            <div className="typo-r14">{r.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
