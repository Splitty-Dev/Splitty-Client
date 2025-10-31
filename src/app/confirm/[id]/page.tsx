import ConfirmClient from "../_component_/confirm-client";

export default async function ConfirmDeal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <ConfirmClient id={id} />
    </div>
  );
}
