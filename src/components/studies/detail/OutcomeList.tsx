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
    <section className="space-y-6">
      <h3 className="text-lg font-semibold items-center">
        {title}

        <span className="ml-2 rounded-full bg-muted px-2 py-1 text-xs font-medium">
          {outcomes.length}
        </span>
      </h3>

      {outcomes.map((outcome, index) => (
        <div key={`${outcome.measure}-${index}`} className="space-y-4">
          <div className="space-y-3 border border-secondary rounded-lg p-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Measure</p>

              <p>{outcome.measure ?? "—"}</p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">Time Frame</p>

              <p>{outcome.timeFrame ?? "—"}</p>
            </div>

            {outcome.description && (
              <div>
                <p className="text-sm font-medium text-muted-foreground">Description</p>

                <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
                  {outcome.description}
                </pre>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
