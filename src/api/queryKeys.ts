export const queryKeys = {
  studies: (params: object) => ["studies", params] as const,
  study: (id: string) => ["study", id] as const,
};

