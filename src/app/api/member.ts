import { HistoryListResponse, HistoryApiParams } from "@/types/history";
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
  await apiFetch(`/member/me/neighborhood`, {
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

const buildHistoryString = (params: HistoryApiParams) => {
  const queryParams = new URLSearchParams();
  if (params.status) queryParams.set("status", params.status);
  if (params.lastId) queryParams.set("cursorId", String(params.lastId));
  if (params.lastCreatedAt)
    queryParams.set("cursorCreatedAt", params.lastCreatedAt);
  return queryParams.toString();
};

export const getMySalesList = async (
  params: HistoryApiParams
): Promise<HistoryListResponse> => {
  const queryString = buildHistoryString(params);
  const res = await apiFetch(
    `/member/me/sales${queryString ? `?${queryString}` : ""}`
  );
  return {
    items: res.data.data,
    hasNext: res.data.hasNext,
    nextCursor: res.data.nextCursor,
  };
};

export const getMyPurchasesList = async (
  params: HistoryApiParams
): Promise<HistoryListResponse> => {
  const queryString = buildHistoryString(params);
  const res = await apiFetch(
    `/member/me/purchases${queryString ? `?${queryString}` : ""}`
  );
  return {
    items: res.data.data,
    hasNext: res.data.hasNext,
    nextCursor: res.data.nextCursor,
  };
};
