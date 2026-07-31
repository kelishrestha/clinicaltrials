import type { ArmsInterventionsModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { FlexRow } from "@/components/common/FlexRow";
import { InfoHeading } from "@/components/common/InfoHeading";

interface Props {
  arms?: ArmsInterventionsModule;
}

export function ArmsCard({ arms }: Props) {
  return (
    <DetailCard id="arms" title="Arms & Interventions">
      {!arms ? (
        <EmptyState title="No arms available" description="This study does not include any arms." />
      ) : (
        <div>
          <InfoHeading title="Arms" subtitle={
            <span className="ml-2 rounded-full bg-muted px-2 py-1 text-xs font-medium font-sans">
              {arms.armGroups?.length}
            </span>
          } />
          <div className="space-y-4">
            {arms.armGroups?.map((arm) => (
              <div key={arm.label} className="rounded-lg border border-secondary p-4">
                <h3 className="font-semibold">{arm.label}</h3>

                {arm.type && <p className="text-sm pt-2 font-medium text-muted-foreground">Type: <span className="text-black">{arm.type}</span></p>}

                {arm.description && (
                  <div className="my-2">
                    <FlexRow label="Description" value={
                      <pre className="mt-3 whitespace-pre-wrap font-sans text-sm">{arm.description}</pre>
                    } />
                  </div>
                )}

                {arm.interventionNames?.length && (
                  <div className="my-2">
                    <FlexRow label="Intervention names" value={
                      <ul className="mt-3 list-disc pl-5 text-sm">
                        {arm.interventionNames.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    }
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {arms.interventions?.length ? (
            <div className="mt-4">
              <InfoHeading title="Interventions" subtitle={
                <span className="ml-2 rounded-full bg-muted px-2 py-1 text-xs font-medium font-sans">
                  {arms.interventions?.length}
                </span>
              } />

              <div className="space-y-4">
                {arms.interventions.map((item) => (
                  <div key={item.name} className="rounded-lg border border-secondary p-4">
                    <p className="font-medium">{item.name}</p>

                    <p className="text-sm pt-2 font-medium text-muted-foreground">Type: <span className="text-black">{item.type}</span></p>

                    {item.description && (
                      <pre className="mt-3 whitespace-pre-wrap font-sans text-sm">
                        {item.description}
                      </pre>
                    )}

                    {item.armGroupLabels?.length && (
                      <div className="my-2">
                        <FlexRow label="Arm group labels" value={
                          <ul className="mt-3 list-disc pl-5 text-sm">
                            {item.armGroupLabels.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        }
                        />
                      </div>
                    )}

                    {item.otherNames?.length && (
                      <div className="my-2">
                        <FlexRow label="Other names" value={
                          <ul className="mt-3 list-disc pl-5 text-sm">
                            {item.otherNames.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        }
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </DetailCard>
  );
}
