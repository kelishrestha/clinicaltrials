import type { StudyFieldSearchParams, StudySearchParams } from "./types";

export const studyKeys = {
  all: ["studies"] as const,

  list: (search: StudySearchParams) => [
    "studies",
    search,
  ] as const,

  details: () => [...studyKeys.all, "detail"] as const,

  detail: (id: string) => [...studyKeys.details(), id] as const,

  stats: (search: StudyFieldSearchParams) => ["study-stats", search] as const,

  metadata: () =>
    [...studyKeys.all, "metadata"] as const,
};
