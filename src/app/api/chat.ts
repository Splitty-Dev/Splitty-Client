import { apiFetch } from ".";

export const getChatList = async ({ role }: { role: "BUYER" | "SELLER" }) => {
  const res = await apiFetch(`/chats?role=${role}`);
  return res.data;
};
export async function getChatMessages(
  goodsId: number,
  cursorId: number | null,
  cursorCreatedAt: string | null
) {
  const query =
    cursorId && cursorCreatedAt
      ? `?cursorId=${cursorId}&cursorCreatedAt=${cursorCreatedAt}`
      : "";

  const res = await apiFetch(`/chats/${goodsId}${query}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

  const d = res.data.data;
  return {
    users: d.users,
    messages: d.messages,
    hasNext: res.data.hasNext,
    nextCursor: res.data.nextCursor
      ? {
          id: res.data.nextCursor.lastId,
          createdAt: res.data.nextCursor.lastCreatedAt,
        }
      : { id: null, createdAt: null },
  };
}

export async function summaryProductInfo(goodsId: number) {
  const res = await apiFetch(`/goods/${goodsId}/summary`);
  return res.data;
}
