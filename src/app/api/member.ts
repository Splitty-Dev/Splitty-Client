import { apiFetch } from ".";

export const getMyInfo = async () => {
  const res = await apiFetch(`/member/me`);
  return res.data;
};
