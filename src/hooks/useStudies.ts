import { useQuery } from "@tanstack/react-query";
import { getStudies } from "../api/searchStudies.api";
import { queryKeys } from "../api/queryKeys";

interface UseStudiesProps {
  query?: string;
  pageToken?: string;
}

export function useStudies({
  query,
  pageToken,
}: UseStudiesProps) {
  return useQuery({
    queryKey: queryKeys.studies({ query, pageToken }),

    queryFn: () =>
      getStudies({
        query,
        pageToken,
        pageSize: 20,
      }),

    staleTime: 1000 * 60 * 5,
    // keepPreviousData: true,
  });
}
