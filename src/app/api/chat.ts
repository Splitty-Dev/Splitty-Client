import { apiFetch } from ".";

export const getChatList = async ({ role }: { role: "BUYER" | "SELLER" }) => {
  const res = await apiFetch(`/chats?role=${role}`);
  return res.data;
};
