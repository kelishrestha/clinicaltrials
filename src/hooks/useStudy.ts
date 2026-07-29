import { studyKeys } from "@/lib/api/queryKeys";
import { studiesRepository } from "@/lib/api/studies.repository";
import { useQuery } from "@tanstack/react-query";

export function useStudy(id: string) {
  return useQuery({
    queryKey: studyKeys.detail(id),

    queryFn: () => studiesRepository.getById(id),

    enabled: Boolean(id),

    staleTime: 1000 * 60 * 10,
  });
}
