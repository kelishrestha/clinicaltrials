import type { EligibilityModule } from "@/types/studyModules";
import { DetailCard } from "./DetailCard";
import { InfoRow } from "../../common/InfoRow";
import { EmptyState } from "./EmptyState";

interface Props {
  eligibility?: EligibilityModule;
}

export function EligibilityCard({ eligibility }: Props) {
  return (
    <DetailCard id="eligibility" title="Eligibility">
      {!eligibility ? (
        <EmptyState title="No arms available" description="This study does not include any arms." />
      ) : (
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
      )}
    </DetailCard>
  );
}
