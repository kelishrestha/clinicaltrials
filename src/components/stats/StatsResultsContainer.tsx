import { useStudyStats } from "@/hooks/useStudiesStats";
import { StatsResults } from "./StatsResults";

export function StatsResultsContainer() {
  const query = useStudyStats();

  return <StatsResults {...query} />;
}
