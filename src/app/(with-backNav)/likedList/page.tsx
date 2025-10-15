import ProductItem from "@/components/product-item";
import { sampleLikedMock } from "@/mocks/sampleLikeList";

export default function LikedListPage() {
  return (
    <div>
      <h2 className="typo-b18 px-4 py-3">관심목록</h2>
      <div>
        {sampleLikedMock.map((m) => (
          <ProductItem
            product={m}
            key={m.id}
            className={m.id === sampleLikedMock.length ? "mb-14" : ""}
          />
        ))}
      </div>
    </div>
  );
}
