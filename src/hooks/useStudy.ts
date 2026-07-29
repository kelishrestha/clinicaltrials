import { useQuery } from "@tanstack/react-query";
import { getStudy } from "../api/studies.api";
import { queryKeys } from "../api/queryKeys";

export const useStudy = (id: string) =>
  useQuery({
    queryKey: queryKeys.study(id),
    queryFn: () => getStudy(id),
    enabled: !!id,

    staleTime: 1000 * 60 * 5,
  });
