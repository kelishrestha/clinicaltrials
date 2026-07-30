import type { StudySearchParams } from "./types";

export const studyKeys = {
  all: ["studies"] as const,

  list: (search: StudySearchParams) => [
    "studies",
    search,
  ] as const,

  details: () => [...studyKeys.all, "detail"] as const,

  detail: (id: string) => [...studyKeys.details(), id] as const,
};
