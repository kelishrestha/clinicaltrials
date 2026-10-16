import type { ArmsInterventionsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { FlexRow } from "@/components/common/FlexRow";
import { IndexedCard } from "@/components/common/IndexedCard";

interface Props {
  arms?: ArmsInterventionsModule;
}

export function ArmsCard({ arms }: Props) {
  const armGroups = arms?.armGroups ?? [];

  return (
    <DetailCard id="arms" title="Arms">
      {armGroups.length === 0 ? (
        <EmptyState title="No arms available" description="This study does not include any arms." />
      ) : (
        <div className="space-y-4">
          {armGroups.map((arm, index) => (
            <IndexedCard key={arm.label} index={index + 1}>
              <h3 className="font-semibold">{arm.label}</h3>

              {arm.type && (
                <p className="text-sm pt-2 font-medium text-muted-foreground">
                  Type: <span className="text-black">{arm.type}</span>
                </p>
              )}

              {arm.description && (
                <div className="my-2">
                  <FlexRow
                    label="Description"
                    value={
                      <pre className="mt-3 whitespace-pre-wrap font-sans text-sm">
                        {arm.description}
                      </pre>
                    }
                  />
                </div>
              )}

              {arm.interventionNames?.length ? (
                <div className="my-2">
                  <FlexRow
                    label="Intervention names"
                    value={
                      <ul className="mt-3 list-disc pl-5 text-sm">
                        {arm.interventionNames.map((item) => (
                          <li key={item}>{item}</li>
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
