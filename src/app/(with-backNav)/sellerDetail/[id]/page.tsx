// "use client";

import UserInfo from "@/app/(with-navbar)/myPage/_component_/userInfo";
import ReviewList from "../_component_/review-list";
import SalesProduct from "../_component_/sales-product";

export default async function SellerDetailPage({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <section className="-mx-4">
      <UserInfo />
      <div className="mx-4">
        <ReviewList />
        <SalesProduct />
      </div>
    </section>
  );
}
