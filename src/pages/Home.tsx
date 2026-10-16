import AppLayout from "@/layouts/AppLayout";

import { StudySearch } from "@/components/search/StudySearch";
import { ErrorState } from "@/components/common/ErrorState";
import { FilterControls } from "@/components/studies/FilterControls";
import { StudyGrid } from "@/components/studies/StudyGrid";
import { StudyPagination } from "@/components/studies/StudyPagination";
import { ResultsToolbar } from "@/components/studies/ResultsToolbar";
import { StudyGridSkeleton } from "@/components/studies/skeletons/StudyGridSkeleton";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useStudies } from "@/hooks/useStudies";
import { useStudySearchStore } from "@/stores/studySearch.store";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

  // Signature of the filter form elements only (not pagination). A change here
  // means the user edited a filter, so the previous results no longer apply and
  // we show a transitional skeleton until the new results arrive. Paging keeps
  // the signature stable, so it falls through to the pagination loading state.
  const filterSignature = JSON.stringify({
    term: search.term,
    status: search.status,
    location: search.location,
    missingField: search.missingField,
  });

  const settledFilterSignature = useRef(filterSignature);

  useEffect(() => {
    if (!isFetching) {
      settledFilterSignature.current = filterSignature;
    }
  }, [isFetching, filterSignature]);

  const filtersChanging =
    isFetching && settledFilterSignature.current !== filterSignature;

  const showSkeleton = isLoading || filtersChanging;

  return (
    <AppLayout>
      <div className="space-y-6">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1
              className="text-4xl font-bold leading-tight text-primary!"
              style={{ marginBottom: "0px" }}
            >
              Clinical Trials
            </h1>

            <p className="text-xs italic text-muted-foreground">
              Search studies from ClinicalTrials.gov
            </p>
          </div>

          <div className="flex gap-2">
            <Link to="/statistics">
              <Button variant="default" size="xs">View Statistics</Button>
            </Link>

            <Link to="/metadata">
              <Button variant="default" size="xs">View Schema</Button>
            </Link>
          </div>
        </header>

        <Separator />

        <Card className="space-y-3 p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <StudySearch />

            <Link to="/fields-stats">
              <Button variant="default" size="xs">Check Field Stats</Button>
            </Link>
          </div>

          <FilterControls />
        </Card>

        <div className="space-y-6">
          {isError ? (
            <ErrorState description="Unable to load studies." />
          ) : showSkeleton ? (
            <StudyGridSkeleton />
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
    </AppLayout>
  );
}
