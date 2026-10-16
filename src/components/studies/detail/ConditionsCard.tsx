import { Badge } from "@/components/ui/badge";

import { DetailCard } from "../../common/DetailCard";
import type { ConditionsModule } from "@/types/studyModules";
import { EmptyState } from "../../common/EmptyState";

interface Props {
  conditions?: ConditionsModule;
}

const sectionTitle =
  "inline-block border-b-2 border-primary pb-1 font-serif font-semibold";

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
          <div className="space-y-3">
            <h3 className={sectionTitle}>Conditions</h3>

            <div className="flex flex-wrap gap-2">
              {conditions.conditions?.map((condition) => (
                <Badge key={condition} variant="secondary">
                  {condition}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={sectionTitle}>Keywords</h3>

            {conditions.keywords && conditions.keywords.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {conditions.keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary">
                    {keyword}
                  </Badge>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No keywords</p>
            )}
          </div>
        </div>
      )}
    </DetailCard>
  );
}
