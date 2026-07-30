import type { StudyFieldValues, StudyStats } from "@/types/studyStats";
import { apiClient } from "./client";

export class StatsRepository {
  async studiesStats(): Promise<StudyStats> {
    const { data } = await apiClient.get<StudyStats>('/stats/size');
    return data;
  }

  async studyFieldValues(params: URLSearchParams): Promise<StudyFieldValues[]> {
    const { data } = await apiClient.get<StudyFieldValues[]>(`/stats/field/values?${params.toString()}`);
    return data;
  }
}

export const statsRepository = new StatsRepository();
