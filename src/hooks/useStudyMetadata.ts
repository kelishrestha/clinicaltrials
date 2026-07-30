import { useQuery } from "@tanstack/react-query";

import { metadataRepository } from "@/lib/api/metadata.repository";

export function useStudyMetadata() {
  return useQuery({
    queryKey: ["study-metadata"],

    queryFn: () =>
      metadataRepository.getStudyMetadata(),

    staleTime: 1000 * 60 * 60 * 24,

    gcTime: 1000 * 60 * 60 * 24 * 7,
  });
}
