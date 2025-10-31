export type QuantityUser = {
  memberId: number;
  username: string;
  profileImageUrl: string;
  quantity: number;
};
export type ReviewInput = {
  goodsId: number;
  reviews: {
    revieweeId: number;
    rating: number;
    content: string;
  }[];
};
