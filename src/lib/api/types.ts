import type { StudyStatus } from "@/types/study.types";
import type { StudyFieldValues } from "@/types/studyStats";

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

  /**
   * Essie search-area name (piece) that must be absent from the study,
   * e.g. "LocationContactEMail" -> query.term=AREA[LocationContactEMail]MISSING
   */
  missingField?: string;

  overallStatus?: StudyStatus[];

  condition?: string;

  fields?: string[];

  page?: number;

  previousPageTokens: string[];

  totalCount?: number;
}


export type StatTypes = "ENUM" | "STRING" | "DATE" | "INTEGER" | "NUMBER" | "BOOLEAN";
export interface StudyFieldSearchParams {
  fields?: string[];

  types?: StatTypes[];
}

export type StudyFieldValuesResponse = StudyFieldValues[];
