import AppLayout from "@/layouts/AppLayout";

import { StudyGrid } from "@/components/studies/StudyGrid";
import { StudySearch } from "@/components/search/StudySearch";
import { StudyFilters } from "@/components/studies/StudyFilters";
import { ResultsToolbar } from "@/components/studies/ResultsToolbar";
import { StudyListPageSkeleton } from "@/components/studies/skeletons/StudyListSkeleton";

import { useStudies } from "@/hooks/useStudies";
import { ErrorState } from "@/components/studies/detail/ErrorState";
import { useStudySearchStore } from "@/stores/studySearch.store";

export default function Home() {
  const { search, updateSearch } = useStudySearchStore();


  const { data, isLoading, isError } = useStudies(search);

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

          <p className="text-xs text-muted-foreground">
            Search studies from ClinicalTrials.gov
          </p>
        </header>

        <StudySearch
          value={search.term || ''}
          onChange={(term) =>
            updateSearch({
              term,
              pageToken: undefined,
            })
          }
        />

        <div className="flex gap-8">
          <StudyFilters
            search={search}
            onChange={updateSearch}
          />

          <div className="min-w-0 flex-1 space-y-6">

            {isError && (
              <ErrorState description="Unable to load studies." />
            )}

            {!isError && (
              <>
                <StudyGrid
                  studies={data?.studies ?? []}
                />
                <ResultsToolbar
                  total={data?.studies?.length ?? 0}
                />
              </>
            )}

            {/* <StudyPagination /> */}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
