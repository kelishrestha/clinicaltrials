import AppLayout from "@/layouts/AppLayout";

import { StudySearch } from "@/components/search/StudySearch";
import { ErrorState } from "@/components/studies/detail/ErrorState";
import { StudyFilters } from "@/components/studies/StudyFilters";
import { StudyGrid } from "@/components/studies/StudyGrid";
import { StudyPagination } from "@/components/studies/StudyPagination";
import { ResultsToolbar } from "@/components/studies/ResultsToolbar";
import { StudyListPageSkeleton } from "@/components/studies/skeletons/StudyListSkeleton";

import { useStudies } from "@/hooks/useStudies";
import { useStudySearchStore } from "@/stores/studySearch.store";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  const {
    search,
    nextPage,
    previousPage,
    setTotalCount
  } = useStudySearchStore();

  const {
    data,
    isLoading,
    isFetching,
    isError,
  } = useStudies(search);

  useEffect(() => {
  if (data?.totalCount != null) {
    setTotalCount(data.totalCount);
  }
}, [data?.totalCount, setTotalCount]);

  if (isLoading) {
    return (
      <AppLayout>
        <StudyListPageSkeleton />
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold text-primary!">
            Clinical Trials
          </h1>

          <p className="text-xs text-muted-foreground pb-3">
            Search studies from ClinicalTrials.gov
          </p>
          <div className="flex gap-2">
            <Link to="/metadata">
              <Button variant="outline" size="xs">View Schema</Button>
            </Link>
            <Link to="/stats">
              <Button variant="outline" size="xs">Check Field Stats</Button>
            </Link>
          </div>
        </header>

        <StudySearch />

        <div className="flex gap-8">
          <StudyFilters />

          <div className="min-w-0 flex-1 space-y-6">
            {isError ? (
              <ErrorState description="Unable to load studies." />
            ) : (
              <>
                <ResultsToolbar
                  total={search.totalCount ?? 0}
                />

                <StudyGrid
                  studies={data?.studies ?? []}
                />

                <StudyPagination
                  loading={isFetching}
                  hasPrevious={
                    search.previousPageTokens.length > 0
                  }
                  hasNext={Boolean(data?.nextPageToken)}
                  onPrevious={previousPage}
                  onNext={() =>
                    nextPage(data?.nextPageToken)
                  }
                />
              </>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
