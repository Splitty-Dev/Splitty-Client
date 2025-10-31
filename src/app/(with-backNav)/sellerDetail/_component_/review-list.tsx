"use client";

import { getUserReviews } from "@/app/api/reviews";
import { formatTimeAgo } from "@/hooks/formatTImeAgo";
import { useQuery } from "@tanstack/react-query";

import Image from "next/image";

export default function ReviewList({ revieweeId }: { revieweeId: number }) {
  const { data } = useQuery({
    queryKey: ["getuserReview", revieweeId],
    queryFn: () => getUserReviews({ revieweeId }),
  });

  return (
    <div className="px-4 py-[18px] flex flex-col gap-3 border-b border-[#F2F2F2]">
      <h2 className="typo-b12 ">받은 거래후기</h2>
      {data?.map(
        (r: {
          reviewer: {
            reviewerId: number;
            username: string;
            profileImageUrl: string;
          };
          createdAt: string;
          content: string;
        }) => (
          <div
            key={`${r.reviewer.reviewerId}-${r.createdAt}`}
            className="flex gap-3"
          >
            <Image
              src={r?.reviewer?.profileImageUrl}
              alt={r?.reviewer?.username || ""}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="flex flex-col ">
              <div className="flex items-center gap-1">
                <p className="typo-b12">{r?.reviewer?.username}</p>
                <p className="typo-r10">{formatTimeAgo(r?.createdAt)}</p>
              </div>
              <div className="typo-r14">{r?.content}</div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
