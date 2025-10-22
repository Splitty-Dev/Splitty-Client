import UserInfo from "@/app/(with-navbar)/myPage/_component_/userInfo";
import ReviewList from "../_component_/review-list";
import SalesProduct from "../_component_/sales-product";

export default function SellerDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);

  return (
    <section className="-mx-4">
      <UserInfo memberId={id} />
      <div className="mx-4">
        <ReviewList />
        <SalesProduct />
      </div>
    </section>
  );
}
