
import type { UseQueryResult } from "@tanstack/react-query";
import { ErrorState } from "@/components/common/ErrorState";
import { useStudyStatsStore } from "@/stores/studyStats.store";

import { StatsLoading } from "./StatsLoading";
import { StatsEmptyState } from "./StatsEmptyState";
import { StatValueGroup } from "./StatValueGroup";

import type { StudyFieldValuesResponse } from "@/lib/api/types";

type Props = Pick<
  UseQueryResult<StudyFieldValuesResponse>,
  | "data"
  | "isLoading"
  | "isFetching"
  | "isError"
>;

export function StatsResults({
  data,
  isLoading,
  isFetching,
  isError,
}: Props) {
  const fields = useStudyStatsStore(
    (state) => state.search.fields,
  );

  if (!fields?.length) {
    return (
      <StatsEmptyState />
    );
  }

  if (isLoading || isFetching) {
    return (
      <StatsLoading />
    );
  }

  if (isError) {
    return (
      <ErrorState description="Unable to load statistics." />
    );
  }

  if (!data?.length) {
    return (
      <StatsEmptyState
        title="No Results"
        description="No values were returned for the selected fields."
      />
    );
  }

  return (
    <div className="space-y-8">
      {data.map((field) => (
        <StatValueGroup
          key={field.field}
          field={field}
        />
      ))}
    </div>
  );
}
