import { useQuery } from "@tanstack/react-query";

import { studyKeys } from "@/lib/api/queryKeys";
import { statsRepository } from "@/lib/api/stats.repository";

const FIELDS = [
  "OverallStatus",
  "Condition",
  "ConditionMeshTerm",
  "LocationFacility",
];

export interface OverviewStats {
  totalStudies: number;
  recruitingStudies: number;
  totalLocations: number;
  totalConditionMeshes: number;
  totalConditions: number;
}

/**
 * Aggregate, corpus-wide statistics for the overview page.
 *
 * The ClinicalTrials.gov /stats endpoints are global only (they reject
 * query.* / filter.* params), so these numbers always describe all studies
 * and are intentionally independent of the search filters on the home page.
 */
export function useOverviewStats() {
  return useQuery<OverviewStats>({
    queryKey: studyKeys.overview(),

    queryFn: async () => {
      const params = new URLSearchParams();
      params.set("fields", FIELDS.join("|"));

      const [size, fields] = await Promise.all([
        statsRepository.studiesStats(),
        statsRepository.studyFieldValues(params),
      ]);

      const byField = (needle: string) =>
        fields.find((field) => field.field.includes(needle));

      const recruiting =
        byField("overallStatus")
          ?.topValues.find((value) => value.value === "RECRUITING")
          ?.studiesCount ?? 0;

      return {
        totalStudies: size.totalStudies,
        recruitingStudies: recruiting,
        totalLocations:
          byField("locations.facility")?.uniqueValuesCount ?? 0,
        totalConditionMeshes:
          byField("meshes.term")?.uniqueValuesCount ?? 0,
        totalConditions:
          byField("conditionsModule.conditions")?.uniqueValuesCount ?? 0,
      };
    },

    staleTime: 1000 * 60 * 60,

    gcTime: 1000 * 60 * 60 * 24,
  });
}
