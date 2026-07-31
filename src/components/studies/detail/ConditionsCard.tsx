import { Badge } from "@/components/ui/badge";

import { DetailCard } from "../../common/DetailCard";

import type { ConditionsModule } from "@/types/studyModules";
import { EmptyState } from "../../common/EmptyState";
import { FlexRow } from "@/components/common/FlexRow";

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
          <FlexRow label="Conditions" value={
            <div className="flex flex-wrap gap-2">
              {conditions.conditions?.map((condition) => (
                <Badge key={condition} variant="accent">
                  {condition}
                </Badge>
              ))}
            </div>
          }
          />

          {conditions.keywords?.length && (
            <FlexRow label="Keywords" value={
              <div className="flex flex-wrap gap-2">
                {conditions.keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            }
            />
          )}
        </div>
      )}
    </DetailCard>
  );
}
