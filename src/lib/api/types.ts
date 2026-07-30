import type { StudyStatus } from "@/types/study.types";

export interface ApiListResponse<T> {
  studies: T[];
  totalCount?: number;
  nextPageToken?: string;
}

export interface PaginationParams {
  pageSize?: number;
  pageToken?: string;
}

export interface StudySearchParams {
  pageSize?: number;

  pageToken?: string;

  term?: string;

  studyType?: string;

  phase?: string;

  country?: string;

  status?: StudyStatus[];

  location?: string;

  overallStatus?: StudyStatus[];

  condition?: string;

  fields?: string[];

  page?: number;

  previousPageTokens: string[];

  totalCount?: number;
}
