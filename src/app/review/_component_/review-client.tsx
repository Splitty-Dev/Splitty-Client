"use client";
import TextareaAutosize from "react-textarea-autosize";
import CloseButton from "@/components/close-button";
import Image from "next/image";
import RatingStar from "../_component_/rating-star";
import { useQuery } from "@tanstack/react-query";
import { getTradeQuantity } from "@/app/api/confirm";
import { useEffect, useState } from "react";
import { QuantityUser } from "@/types/confirm-review";
import { useRouter } from "next/navigation";
import { useCreateReview } from "@/hooks/useCreateReview";

export default function ReviewClient({ id }: { id: string }) {
  const goodsId = Number(id);
  const router = useRouter();
  const [myId, setMyId] = useState<number | null>(null);

  const { data } = useQuery({
    queryKey: ["getTradeQuantity", goodsId],
    queryFn: () => getTradeQuantity(goodsId),
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("myId");
      if (stored) setMyId(Number(stored));
    }
  }, []);

  const [users, setUsers] = useState<QuantityUser[]>([]);
  const [reviewList, setReviewList] = useState<
    { revieweeId: number; rating: number; content: string }[]
  >([]);
  const [activeId, setActiveId] = useState<number | null>(null);

  useEffect(() => {
    if (!data?.quantities) return;
    if (myId === null) return;

    const filtered = data.quantities.filter(
      (u: QuantityUser) => u.memberId !== Number(myId)
    );
    setUsers(filtered);

    setReviewList(
      filtered.map((u: QuantityUser) => ({
        revieweeId: u.memberId,
        rating: 0,
        content: "",
      }))
    );
  }, [data, myId]);

  const { mutate: createReview } = useCreateReview();

  const handleRatingChange = (id: number, rating: number) => {
    setReviewList((prev) =>
      prev.map((r) => (r.revieweeId === id ? { ...r, rating } : r))
    );
  };

  const handleContentChange = (id: number, content: string) => {
    setReviewList((prev) =>
      prev.map((r) => (r.revieweeId === id ? { ...r, content } : r))
    );
  };
  const handleSubmitAll = () => {
    const hasEmpty = reviewList.some(
      (r) => r.rating === 0 || r.content.trim() === ""
    );
    if (hasEmpty) {
      alert("모든 유저의 리뷰를 입력해주세요!");
      return;
    }
    createReview(
      { goodsId, reviews: reviewList },
      {
        onSuccess: () => {
          alert("모든 리뷰가 등록되었습니다!");
          router.back();
        },
      }
    );
  };
  return (
    <div>
      <div className="relative flex flex-col gap-4">
        <div className="flex justify-center items-center py-[14px] border-b border-[#F2F2F2] relative">
          <div className="absolute left-4">
            <CloseButton />
          </div>
          <h2 className="typo-b18">리뷰 작성</h2>
        </div>
        <div className="flex py-3 gap-3 px-4 overflow-x-auto scrollbar-hide ">
          {users.map((u) => {
            const isActive = u.memberId === activeId;
            const isFilled =
              (reviewList
                ?.find((r) => r.revieweeId === u.memberId)
                ?.content.trim()?.length ?? 0) > 0;
            return (
              <div
                key={u.memberId}
                className={`flex items-center gap-1  px-3 py-2 rounded-[10px] flex-shrink-0 border-[1px]  ${
                  isFilled
                    ? "text-[#f2f2f2] bg-[#4F4DF8] border-[#4F4DF8] "
                    : isActive
                    ? "text-[#4F4DF8] bg-[#F2F2F2] border-[#4F4DF8] "
                    : "text-[#c9c9c9] bg-[#F2F2F2] border-[#F2F2F2] "
                }`}
                onClick={() => setActiveId(u.memberId)}
              >
                <Image
                  src={u.profileImageUrl}
                  alt={u.username}
                  width={40}
                  height={40}
                  className="rounded-[5px] "
                />
                <h4 className="typo-b14">{u.username}님</h4>
              </div>
            );
          })}
        </div>
        {activeId && (
          <>
            <div className="px-4">
              <RatingStar
                value={
                  reviewList.find((r) => r.revieweeId === activeId)?.rating || 0
                }
                onChange={(r: number) => handleRatingChange(activeId, r)}
              />
            </div>
            <div className="px-4">
              <TextareaAutosize
                className="bg-[#F2F2F2] min-h-[165px] w-full px-[14px] py-2 focus:outline-none rounded-[4px]"
                placeholder="리뷰를 작성해주세요."
                value={
                  reviewList.find((r) => r.revieweeId === activeId)?.content ||
                  ""
                }
                onChange={(e) => handleContentChange(activeId, e.target.value)}
              />
            </div>
          </>
        )}
      </div>
      <div className="fixed bottom-0 bg-white flex  w-full typo-r12 items-center align-center px-4 pb-[29px] py-2 border-t border-[#F2F2F2] h-[80px] justify-end">
        <button
          className="typo-b14 px-[14px] py-2 bg-[#4F4DF8] text-[white] rounded-[4px]"
          onClick={handleSubmitAll}
        >
          리뷰 작성완료
        </button>
      </div>
    </div>
  );
}
