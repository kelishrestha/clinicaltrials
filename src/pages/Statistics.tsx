import AppLayout from "@/layouts/AppLayout";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ErrorState } from "@/components/common/ErrorState";
import { OverviewStatCard } from "@/components/studies/OverviewStatCard";

import { useOverviewStats } from "@/hooks/useOverviewStats";

export default function StatisticsPage() {
  const { data, isLoading, isError } = useOverviewStats();

  const cards = [
    { label: "Total Studies", value: data?.totalStudies },
    { label: "Recruiting Studies", value: data?.recruitingStudies },
    { label: "Study Locations", value: data?.totalLocations },
    { label: "Condition Meshes", value: data?.totalConditionMeshes },
    { label: "Conditions", value: data?.totalConditions },
  ];

  return (
    <AppLayout>
      <div className="space-y-6">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="mb-0 text-4xl font-bold leading-tight text-primary!">
              Statistics
            </h1>

            <p className="text-xs italic text-muted-foreground">
              Aggregate statistics across all ClinicalTrials.gov studies
            </p>
          </div>

          <Link to="/">
            <Button variant="outline" size="xs">
              <ArrowLeft className="h-4 w-4" />
              Back to Search
            </Button>
          </Link>
        </header>

        {isError ? (
          <ErrorState description="Unable to load statistics." />
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5">
            {cards.map((card) => (
              <OverviewStatCard
                key={card.label}
                label={card.label}
                value={card.value}
                loading={isLoading}
              />
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
