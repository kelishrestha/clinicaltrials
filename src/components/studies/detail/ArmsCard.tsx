import type { ArmsInterventionsModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";

interface Props {
  arms?: ArmsInterventionsModule;
}

export function ArmsCard({ arms }: Props) {
  if (!arms) return null;

  return (
    <DetailCard title="Arms & Interventions">
      <div className="space-y-8">
        {arms.armGroups?.map((arm) => (
          <div key={arm.label} className="rounded-lg border p-4">
            <h3 className="font-semibold">{arm.label}</h3>

            {arm.type && <p className="text-sm text-muted-foreground">{arm.type}</p>}

            {arm.description && (
              <pre className="mt-3 whitespace-pre-wrap font-sans text-sm">{arm.description}</pre>
            )}

            {arm.interventionNames?.length ? (
              <ul className="mt-3 list-disc pl-5 text-sm">
                {arm.interventionNames.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}

        {arms.interventions?.length ? (
          <div>
            <h3 className="mb-4 text-lg font-semibold">Interventions</h3>

            <div className="space-y-4">
              {arms.interventions.map((item) => (
                <div key={item.name} className="rounded-lg border p-4">
                  <p className="font-medium">{item.name}</p>

                  <p className="text-sm text-muted-foreground">{item.type}</p>

                  {item.description && (
                    <pre className="mt-3 whitespace-pre-wrap font-sans text-sm">
                      {item.description}
                    </pre>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </DetailCard>
  );
}
