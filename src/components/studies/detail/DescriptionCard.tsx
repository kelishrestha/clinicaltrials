import type { DescriptionModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";

interface Props {
  description?: DescriptionModule;
}

export function DescriptionCard({ description }: Props) {
  if (!description) return null;

  return (
    <DetailCard title="Description">
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
    </DetailCard>
  );
}
