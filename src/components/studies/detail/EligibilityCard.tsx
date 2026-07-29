import type { EligibilityModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";
import { InfoRow } from "../../common/InfoRow";

interface Props {
  eligibility?: EligibilityModule;
}

export function EligibilityCard({ eligibility }: Props) {
  if (!eligibility) return null;

  return (
    <DetailCard title="Eligibility">
      <div className="space-y-6">
        <div>
          <InfoRow
            label="Age"
            value={`${eligibility.minimumAge ?? "Any"} - ${eligibility.maximumAge ?? "Any"}`}
          />

          <InfoRow label="Sex" value={eligibility.sex} />

          <InfoRow
            label="Healthy Volunteers"
            value={eligibility.healthyVolunteers ? "Yes" : "No"}
          />

          <InfoRow label="Standard Ages" value={eligibility.stdAges?.join(", ")} />
        </div>

        {eligibility.eligibilityCriteria && (
          <div className="space-y-2">
            <h3 className="font-semibold">Eligibility Criteria</h3>

            <div className="rounded-md bg-muted/40 p-4">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
                {eligibility.eligibilityCriteria}
              </pre>
            </div>
          </div>
        )}
      </div>
    </DetailCard>
  );
}
