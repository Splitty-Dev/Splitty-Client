import ProductItemSkeleton from "./product-item-skeleton";

export default function ProductListItemSkeleton({ count }: { count: number }) {
  return new Array(count).fill(0).map((_, idx) => (
    <div key={idx}>
      <ProductItemSkeleton />
    </div>
  ));
}
