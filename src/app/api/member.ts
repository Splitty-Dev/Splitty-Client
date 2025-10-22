import { apiFetch } from ".";

export const getMyInfo = async () => {
  const res = await apiFetch(`/member/me`);
  return res.data;
};

export const postLocation = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  await apiFetch(`/member/neighborhood`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      latitude,
      longitude,
    }),
  });
};

export const getUserInfo = async (memberId: number) => {
  const res = await apiFetch(`/member/${memberId}`);
  return res.data;
};
