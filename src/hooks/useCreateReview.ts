import { createReview } from "@/app/api/reviews";
import { ReviewInput } from "@/types/confirm-review";
import { useMutation } from "@tanstack/react-query";

export const useCreateReview = () => {
  return useMutation({
    mutationFn: (body: ReviewInput) => createReview(body),
    onSuccess: (data) => {
      console.log(data);
      alert("리뷰가 등록되었습니다!");
    },
    onError: (err) => {
      console.error(err);
      alert("리뷰 등록에 실패했습니다.");
    },
  });
};
