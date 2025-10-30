export interface productType {
  id: number;
  name: string;
  price: number;
  neighName: string;
  leftQuantity: number;
  quantity: number;
  currParticipants: number;
  totalWishlist: number;
  imageName: string;
  sellerId: number;
  status: "OPEN" | "CLOSED" | "COMPLETED";
}
