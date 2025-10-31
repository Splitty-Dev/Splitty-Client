import ChatClient from "../_component/chat-client";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const goodsId = Number(id);

  if (!goodsId || isNaN(goodsId)) {
    return <div>오류가 발생했습니다</div>;
  }

  return (
    <div>
      <ChatClient goodsId={goodsId} />
    </div>
  );
}
