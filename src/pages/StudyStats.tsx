import AppLayout from "@/layouts/AppLayout";

import { StatsSidebar } from "@/components/stats/StatsSidebar";
import { StatsResultsContainer } from "@/components/stats/StatsResultsContainer";
import { StatsHeader } from "@/components/stats/StatsHeader";

export default function StudyStatsPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <StatsHeader />

        <div className="grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <StatsSidebar />

          <StatsResultsContainer />
        </div>
      </div>
    </AppLayout>
  );
}
