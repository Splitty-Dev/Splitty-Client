import ProductDetailClient from "../_component_/product-detail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <ProductDetailClient id={parseInt(id)} />;
}
