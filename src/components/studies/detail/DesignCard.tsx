import { DetailCard } from "../../common/DetailCard";
import { InfoRow } from "../../common/InfoRow";
import type { DesignModule } from "@/types/studyModules";
import { EmptyState } from "../../common/EmptyState";
import { InfoHeading } from "@/components/common/InfoHeading";
import { formatBoolean } from "@/lib/formatters/formatBoolean";
import { FlexRow } from "@/components/common/FlexRow";

interface Props {
  design?: DesignModule;
}

export function DesignCard({ design }: Props) {
  return (
    <DetailCard id="design" title="Study Design">
      {!design ? (
        <EmptyState
          title="No study design info available"
          description="This study does not include any study design info."
        />
      ) : (
        <div className="space-y-6">
          <div className="grid">
            <InfoRow label="Study Type" value={design.studyType} />
            <InfoRow label="Number of References to an Expanded Access Study" value={design.nPtrsToThisExpAccNctId} />
            <InfoRow label="Study Phase" value={design.phases} />
            <InfoRow label="Number of Phases" value={design.numPhases} />
            <InfoRow label="Patient Registry" value={formatBoolean(design.patientRegistry)} />
            <InfoRow label="Target Duration" value={design.targetDuration} />

            <InfoHeading title="Expanded Access Types" />

            <InfoRow label="Individual" value={formatBoolean(design.expandedAccessTypes?.individual)} />
            <InfoRow label="Intermediate" value={formatBoolean(design.expandedAccessTypes?.intermediate)} />
            <InfoRow label="Treatment" value={formatBoolean(design.expandedAccessTypes?.treatment)} />

            <InfoHeading title="Enrollment Information" />

            <InfoRow label="Enrollment Count" value={design.enrollmentInfo?.count} />
            <InfoRow label="Enrollment Type" value={design.enrollmentInfo?.type} />

            <InfoHeading title="Design Information" />

            <InfoRow label="Allocation" value={design.designInfo?.allocation} />
            <InfoRow label="Primary Purpose" value={design.designInfo?.primaryPurpose} />
            <InfoRow label="Observational Model" value={design.designInfo?.observationalModel} />
            <InfoRow label="Time Perspective" value={design.designInfo?.timePerspective} />
            <InfoRow label="Intervention Model" value={design.designInfo?.interventionModel} />
            <div className="my-3">
              <FlexRow label="Intervention Description" value={design.designInfo?.interventionModelDescription} />
            </div>

            <InfoHeading title="Masking Information" />
            <InfoRow label="Masking" value={design.designInfo?.maskingInfo?.masking} />
            <InfoRow label="Who is Masked" value={design.designInfo?.maskingInfo?.whoMasked?.join(", ")} />
            <InfoRow
              label="Number of who maskeds"
              value={design.designInfo?.maskingInfo?.numDesignWhoMaskeds}
            />
            <div className="my-3">
              <FlexRow label="Masking Description" value={design.designInfo?.maskingInfo?.maskingDescription} />
            </div>

            <InfoHeading title="BioSpec Information" />
            <InfoRow label="Bio Spec Retention" value={design.designInfo?.bioSpec?.retention} />
            <div className="my-3">
              <FlexRow label="Bio Spec Description" value={design.designInfo?.bioSpec?.description} />
            </div>
          </div>
        </div>
      )}
    </DetailCard>
  );
}
