import type { OutcomesModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { OutcomeList } from "./OutcomeList";
import { EmptyState } from "../../common/EmptyState";

interface Props {
  outcomes?: OutcomesModule;
}

export function OutcomeCard({ outcomes }: Props) {
  return (
    <DetailCard id="outcomes" title="Outcome Measures">
      {!outcomes ? (
        <EmptyState title="No arms available" description="This study does not include any arms." />
      ) : (
        <div className="space-y-8">
          <OutcomeList title="Primary Outcomes" outcomes={outcomes.primaryOutcomes} />

          <OutcomeList title="Secondary Outcomes" outcomes={outcomes.secondaryOutcomes} />

          <OutcomeList title="Other Outcomes" outcomes={outcomes.otherOutcomes} />
        </div>
      )}
    </DetailCard>
  );
}
