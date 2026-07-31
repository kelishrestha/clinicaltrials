import { FlexRow } from "@/components/common/FlexRow";
import { InfoHeading } from "@/components/common/InfoHeading";
import type { Outcome } from "@/types/study";

interface Props {
  title: string;
  outcomes?: Outcome[];
}

export function OutcomeList({ title, outcomes }: Props) {
  if (!outcomes?.length) {
    return null;
  }

  return (
    <section className="space-y-4">
      <InfoHeading title={title} subtitle={
        <span className="ml-2 rounded-full bg-muted px-2 py-1 text-xs font-medium font-sans">
          {outcomes.length}
        </span>
      } />

      {outcomes.map((outcome, index) => (
        <div key={`${outcome.measure}-${index}`} className="space-y-4">
          <div className="space-y-3 border border-secondary rounded-lg p-4">
            <FlexRow label="Measure" value={outcome.measure} />

            <FlexRow label="Time Frame" value={outcome.timeFrame} />

            <FlexRow label="Description" value={
              <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
                {outcome.description}
              </pre>
            } />
          </div>
        </div>
      ))}
    </section>
  );
}
