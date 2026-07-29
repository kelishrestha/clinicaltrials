import type { SearchStudiesParams } from "../types/study";
import { api } from "./client";

export async function getStudies({
  query,
  pageSize = 20,
  pageToken,
}: SearchStudiesParams) {
  const { data } = await api.get("/studies", {
    params: {
      "query.term": query,
      pageSize,
      pageToken,
    },
  });

  return data;
}
