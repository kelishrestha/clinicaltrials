import { apiClient } from "@/lib/api/client";

import { type Study } from "@/types/study";
import { type ApiListResponse } from "./types";

export class StudiesRepository {
  async search(params: URLSearchParams): Promise<ApiListResponse<Study>>  {
    const {data} = await apiClient.get<ApiListResponse<Study>>(`/studies?${params.toString()}`);
    return data;
  }

  async getById(id: string): Promise<Study> {
    const { data } = await apiClient.get<Study>(`/studies/${id}`);

    return data;
  }
}

export const studiesRepository = new StudiesRepository();
