import type { DescriptionModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { EmptyState } from "./EmptyState";

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
            <section className="space-y-2">
              <h3 className="font-semibold">Brief Summary</h3>

              <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
                {description.briefSummary}
              </pre>
            </section>
          )}

          {description.detailedDescription && (
            <section className="space-y-2">
              <h3 className="font-semibold">Detailed Description</h3>

              <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
                {description.detailedDescription}
              </pre>
            </section>
          )}
        </div>
      )}
    </DetailCard>
  );
}
