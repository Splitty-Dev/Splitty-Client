import { ReviewInput } from "@/types/confirm-review";
import { apiFetch } from ".";

export const createReview = async (body: ReviewInput) => {
  const res = await apiFetch(`/review`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return res;
};
export const getUserReviews = async ({
  revieweeId,
}: {
  revieweeId: number;
}) => {
  const res = await apiFetch(`/review/${revieweeId}`, { method: "POST" });
  console.log("📦 getUserReviews:", res);
  return res.data.data;
};
