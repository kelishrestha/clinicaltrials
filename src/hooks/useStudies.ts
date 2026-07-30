import { studyKeys } from "@/lib/api/queryKeys";
import { studiesRepository } from "@/lib/api/studies.repository";
import type { StudySearchParams } from "@/lib/api/types";
import { buildStudyQuery } from "@/lib/queryBuilder";
import { useQuery } from "@tanstack/react-query";

export function useStudies(search: StudySearchParams) {
  const searchQuery = buildStudyQuery(search);

  return useQuery({
    queryKey: studyKeys.list(search),

    queryFn: () => studiesRepository.search(searchQuery),

    staleTime: 1000 * 60 * 5,

    gcTime: 1000 * 60 * 30,

    placeholderData: (previous) => previous,
  });
}
