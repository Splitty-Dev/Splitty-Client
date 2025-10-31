import { apiFetch } from ".";

export const getMySearchRec = async () => {
  const res = await apiFetch(`/member/me/search`);
  return res.data;
};

export const searchProducts = async ({
  keyword,
  cursorId = null,
  cursorCreatedAt = null,
}: {
  keyword: string;
  cursorId?: number | null;
  cursorCreatedAt?: string | null;
}) => {
  const params = new URLSearchParams();
  params.append("keyword", keyword);
  if (cursorId) params.append("cursorId", String(cursorId));
  if (cursorCreatedAt) params.append("cursorCreatedAt", cursorCreatedAt);

  const res = await apiFetch(`/goods/search?${params.toString()}`);
  console.log(">>>>>", res.data.data);
  return res.data.data;
};
