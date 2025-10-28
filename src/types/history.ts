import { productType } from "./product";

export interface PageParam {
  status: string;
  lastId: number | null;
  lastCreatedAt: string | null;
}

export interface HistoryApiParams extends PageParam {
  status: string;
}

export interface HistoryListResponse {
  items: productType[];
  hasNext: boolean;
  nextCursor: {
    lastId: number | null;
    lastCreatedAt?: string | null;
  } | null;
}
