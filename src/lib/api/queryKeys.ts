export const studyKeys = {
  all: ["studies"] as const,

  lists: () => [...studyKeys.all, "list"] as const,

  list: (params: object) => [...studyKeys.lists(), params] as const,

  details: () => [...studyKeys.all, "detail"] as const,

  detail: (id: string) => [...studyKeys.details(), id] as const,
};
