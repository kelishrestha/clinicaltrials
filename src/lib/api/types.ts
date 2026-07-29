export interface ApiListResponse<T> {
  studies: T[];
  nextPageToken?: string;
}

export interface PaginationParams {
  pageSize?: number;
  pageToken?: string;
}

export interface StudySearchParams {
  query?: string;

  pageSize?: number;

  pageToken?: string;

  overallStatus?: string;

  studyType?: string;

  phase?: string;

  country?: string;
}
