import UserInfo from "@/app/(with-navbar)/myPage/_component_/userInfo";
import ReviewList from "../_component_/review-list";
import SalesProduct from "../_component_/sales-product";

export default async function SellerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <section className="-mx-4">
      <UserInfo memberId={parseInt(id)} />
      <div className="mx-4">
        <ReviewList revieweeId={Number(id)} />
        <SalesProduct sellerId={Number(id)} />
      </div>
    </section>
  );
}
