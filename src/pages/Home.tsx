import { useState } from "react";

import AppLayout from "@/layouts/AppLayout";

import StudyGrid from "@/components/studies/StudyGrid";
import StudySearch from "@/components/search/StudySearch";

import { useStudies } from "@/hooks/useStudies";

export default function Home() {
  const [search, setSearch] = useState("diabetes");

  const { data, isLoading } = useStudies({
    query: search,
  });

  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Clinical Trials
          </h1>

          <p className="text-muted-foreground">
            Search studies from ClinicalTrials.gov
          </p>
        </div>

        <StudySearch
          value={search}
          onChange={setSearch}
        />

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <StudyGrid
            studies={data?.studies ?? []}
          />
        )}
      </div>
    </AppLayout>
  );
}
