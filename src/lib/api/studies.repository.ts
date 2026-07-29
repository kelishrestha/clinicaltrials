import { apiClient } from "@/lib/api/client";

import { type Study } from "@/types/study";
import { type ApiListResponse, type StudySearchParams } from "./types";

export class StudiesRepository {
  async search(params: StudySearchParams): Promise<ApiListResponse<Study>> {
    const { data } = await apiClient.get<ApiListResponse<Study>>("/studies", {
      params: {
        "query.term": params.query,
        pageSize: params.pageSize ?? 20,
        pageToken: params.pageToken,
      },
    });

    return data;
  }

  async getById(id: string): Promise<Study> {
    const { data } = await apiClient.get<Study>(`/studies/${id}`);

    return data;
  }
}

export const studiesRepository = new StudiesRepository();
