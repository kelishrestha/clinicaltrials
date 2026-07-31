import type { DescriptionModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "../../common/EmptyState";
import { InfoMarkup } from "@/components/common/InfoMarkup";

interface Props {
  description?: DescriptionModule;
}

export function DescriptionCard({ description }: Props) {
  return (
    <DetailCard id="description" title="Description">
      {!description ? (
        <EmptyState
          title="No description available"
          description="This study does not include any description."
        />
      ) : (
        <div className="space-y-6">
          {description.briefSummary && (
            <InfoMarkup title="Brief Summary" value={description.briefSummary} />
          )}

          {description.detailedDescription && (
            <InfoMarkup title="Detailed Description" value={description.detailedDescription} />
          )}
        </div>
      )}
    </DetailCard>
  );
}
