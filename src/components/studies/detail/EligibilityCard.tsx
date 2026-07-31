import type { EligibilityModule } from "@/types/studyModules";
import { DetailCard } from "../../common/DetailCard";
import { InfoRow } from "../../common/InfoRow";
import { EmptyState } from "../../common/EmptyState";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { formatBoolean } from "@/lib/formatters/formatBoolean";
import { FlexRow } from "@/components/common/FlexRow";
import { InfoHeading } from "@/components/common/InfoHeading";

interface Props {
  eligibility?: EligibilityModule;
}

export function EligibilityCard({ eligibility }: Props) {
  const [copied, setCopied] = useState(false);

  async function copyResponse() {
    await navigator.clipboard.writeText(eligibility?.eligibilityCriteria || '');

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
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

            <InfoRow label="Healthy Volunteers" value={formatBoolean(eligibility.healthyVolunteers)} />
            <InfoRow label="Gender based" value={formatBoolean(eligibility.genderBased)} />
            <InfoRow label="Standard Ages" value={eligibility.stdAges?.join(", ")} />
            <InfoRow label="Sampling Method" value={eligibility.samplingMethod} />
            <div className="my-3">
              <FlexRow label="Study Population" value={eligibility.studyPopulation} />
            </div>
          </div>

          {eligibility.eligibilityCriteria && (
            <div className="space-y-2">
              <InfoHeading title="Eligibility Criteria" />

              <div className="flex flex-row-reverse pb-5">
                <Button
                  variant="outline"
                  size="xs"
                  className="sticky"
                  onClick={copyResponse}
                >
                  {copied ? (
                    <>
                      <CheckIcon className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <CopyIcon className="mr-2 h-4 w-4" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
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
