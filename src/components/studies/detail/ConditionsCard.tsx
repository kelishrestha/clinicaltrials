import { Badge } from "@/components/ui/badge";

import { DetailCard } from "./DetailCard";

import type { ConditionsModule } from "@/types/studyModules";
import { EmptyState } from "./EmptyState";

interface Props {
  conditions?: ConditionsModule;
}

export function ConditionsCard({ conditions }: Props) {
  return (
    <DetailCard id="conditions" title="Conditions">
      {!conditions ? (
        <EmptyState
          title="No conditions available"
          description="This study does not include any conditions."
        />
      ) : (
        <div className="space-y-6">
          <div>
            <h3 className="mb-3 font-semibold">Conditions</h3>

            <div className="flex flex-wrap gap-2">
              {conditions.conditions?.map((condition) => (
                <Badge key={condition} variant="secondary">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>

          {conditions.keywords?.length ? (
            <div>
              <h3 className="mb-3 font-semibold">Keywords</h3>

              <div className="flex flex-wrap gap-2">
                {conditions.keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </DetailCard>
  );
}
