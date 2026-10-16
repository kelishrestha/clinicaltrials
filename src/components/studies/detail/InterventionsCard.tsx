import type { ArmsInterventionsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { FlexRow } from "@/components/common/FlexRow";
import { IndexedCard } from "@/components/common/IndexedCard";

interface Props {
  interventions?: ArmsInterventionsModule;
}

export function InterventionsCard({ interventions }: Props) {
  const items = interventions?.interventions ?? [];

  return (
    <DetailCard id="interventions" title="Interventions">
      {items.length === 0 ? (
        <EmptyState
          title="No interventions available"
          description="This study does not include any interventions."
        />
      ) : (
        <div className="space-y-4">
          {items.map((item, index) => (
            <IndexedCard key={item.name} index={index + 1}>
              <p className="font-medium">{item.name}</p>

              <p className="text-sm pt-2 font-medium text-muted-foreground">
                Type: <span className="text-black">{item.type}</span>
              </p>

              {item.description && (
                <pre className="mt-3 whitespace-pre-wrap font-sans text-sm">
                  {item.description}
                </pre>
              )}

              {item.armGroupLabels?.length ? (
                <div className="my-2">
                  <FlexRow
                    label="Arm group labels"
                    value={
                      <ul className="mt-3 list-disc pl-5 text-sm">
                        {item.armGroupLabels.map((label) => (
                          <li key={label}>{label}</li>
                        ))}
                      </ul>
                    }
                  />
                </div>
              ) : null}

              {item.otherNames?.length ? (
                <div className="my-2">
                  <FlexRow
                    label="Other names"
                    value={
                      <ul className="mt-3 list-disc pl-5 text-sm">
                        {item.otherNames.map((name) => (
                          <li key={name}>{name}</li>
                        ))}
                      </ul>
                    }
                  />
                </div>
              ) : null}
            </IndexedCard>
          ))}
        </div>
      )}
    </DetailCard>
  );
}
