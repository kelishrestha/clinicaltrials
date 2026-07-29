import { studyKeys } from "@/lib/api/queryKeys";
import { studiesRepository } from "@/lib/api/studies.repository";
import type { StudySearchParams } from "@/lib/api/types";
import { useQuery } from "@tanstack/react-query";

export function useStudies(params: StudySearchParams) {
  return useQuery({
    queryKey: studyKeys.list(params),

    queryFn: () => studiesRepository.search(params),

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 30,

    placeholderData: (previous) => previous,
  });
}
