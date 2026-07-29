import AppLayout from "@/layouts/AppLayout";

import { StudyGrid } from "@/components/studies/StudyGrid";
import { StudySearch } from "@/components/search/StudySearch";

import { useStudies } from "@/hooks/useStudies";
import { useStudySearch } from "@/hooks/useStudySearch";

export default function Home() {
  const { search, setQuery } = useStudySearch();

  const { data, isLoading, isError } = useStudies(search);

  return (
    <AppLayout>
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold">Clinical Trials</h1>

          <p className="text-muted-foreground">Search studies from ClinicalTrials.gov</p>
        </header>

        <StudySearch value={search.query} onChange={setQuery} />

        {isLoading && <p>Loading studies...</p>}

        {isError && <p>Unable to load studies.</p>}

        {!isLoading && !isError && <StudyGrid studies={data?.studies ?? []} />}
      </div>
    </AppLayout>
  );
}
