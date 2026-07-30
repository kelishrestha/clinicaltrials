import { useQuery } from "@tanstack/react-query";

import { studyKeys } from "@/lib/api/queryKeys";
import { statsRepository } from "@/lib/api/stats.repository";
import { buildStudyStatsQuery } from "@/lib/queryBuilder";
import { useStudyStatsStore } from "@/stores/studyStats.store";

export function useStudyStats() {
  const search = useStudyStatsStore(
    (state) => state.search,
  );

  const query = buildStudyStatsQuery(search);

  return useQuery({
    queryKey: studyKeys.stats(search),

    queryFn: () =>
      statsRepository.studyFieldValues(query),

    enabled:
      search.fields && !!search.fields.length ||
      search.types && !!search.types.length,

    staleTime: 1000 * 60 * 60,

    gcTime: 1000 * 60 * 60 * 24,
  });
}
