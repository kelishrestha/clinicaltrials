import AppLayout from "@/layouts/AppLayout";

import { StudyGrid } from "@/components/studies/StudyGrid";
import { StudySearch } from "@/components/search/StudySearch";

import { useStudies } from "@/hooks/useStudies";
import { useStudySearch } from "@/hooks/useStudySearch";
import { SectionLoader } from "@/components/common/SectionLoader";

export default function Home() {
  const { search, setQuery } = useStudySearch();

  const { data, isLoading, isError } = useStudies(search);

  return (
    <AppLayout>
      <div className="space-y-8">
        <header>
          <h1 className="text-4xl font-bold text-primary!">Clinical Trials</h1>

          <p className="text-muted-foreground text-xs">Search studies from ClinicalTrials.gov</p>
        </header>

        <StudySearch value={search.query} onChange={setQuery} />

        {isLoading && <SectionLoader title="studies" />}

        {isError && <p>Unable to load studies.</p>}

        {!isLoading && !isError && <StudyGrid studies={data?.studies ?? []} />}
      </div>
    </AppLayout>
  );
}
