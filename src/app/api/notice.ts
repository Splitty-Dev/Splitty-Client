import { apiFetch } from ".";

export const getNotifications = async ({
  cursorId = null,
  cursorCreatedAt = null,
}: {
  cursorId?: number | null;
  cursorCreatedAt?: string | null;
}) => {
  const params = new URLSearchParams();
  if (cursorId) params.append("cursorId", String(cursorId));
  if (cursorCreatedAt) params.append("cursorCreatedAt", cursorCreatedAt);

  const query = params.toString();
  const url = query
    ? `/member/me/notifications?${query}`
    : `/member/me/notifications`;

  const res = await apiFetch(url);
  console.log(res.data);
  return res.data;
};
