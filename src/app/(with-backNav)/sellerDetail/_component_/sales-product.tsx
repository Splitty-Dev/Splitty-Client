import ProductItem from "@/components/product-item";
import { mock } from "@/mocks/mock";

export default function SalesProduct() {
  return (
    <div className="py-[14px]">
      <h2 className="typo-b12 px-4 ">판매상품</h2>
      {mock.slice(0, 3).map((m) => (
        <ProductItem product={m} key={m.id} />
      ))}
    </div>
  );
}
