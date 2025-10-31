import ReviewClient from "../_component_/review-client";

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <ReviewClient id={id} />
    </div>
  );
}
