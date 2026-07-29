import { DetailCard } from "./DetailCard";
import { InfoRow } from "../../common/InfoRow";
import type { DesignModule } from "@/types/studyModules";

interface Props {
  design?: DesignModule;
}

export function DesignCard({
  design,
}: Props) {
  if (!design) return null;

  return (
    <DetailCard title="Study Design">
      <div className="space-y-6">
        <div className="grid gap-2">
          <InfoRow
            label="Study Type"
            value={design.studyType}
          />

          <InfoRow
            label="Study Phase"
            value={design.phases}
          />

          <InfoRow
            label="Enrollment"
            value={
              design.designInfo?.enrollmentInfo
                ? `${design.designInfo?.enrollmentInfo.count ?? "—"} (${design.designInfo?.enrollmentInfo.type ?? "N/A"})`
                : "—"
            }
          />

          <InfoRow
            label="Allocation"
            value={design.designInfo?.allocation}
          />

          <InfoRow
            label="Intervention Model"
            value={design.designInfo?.interventionModel}
          />

          <InfoRow
            label="Primary Purpose"
            value={design.designInfo?.primaryPurpose}
          />

          <InfoRow
            label="Masking"
            value={design.designInfo?.maskingInfo?.masking}
          />

          <InfoRow
            label="Who is Masked"
            value={design.designInfo?.maskingInfo?.whoMasked}
          />

          <InfoRow
            label="Number of who maskeds"
            value={design.designInfo?.maskingInfo?.numDesignWhoMaskeds}
          />

          <InfoRow
            label="Observational Model"
            value={design.designInfo?.observationalModel}
          />

          <InfoRow
            label="Time Perspective"
            value={design.designInfo?.timePerspective}
          />

          <InfoRow
            label="Bio Spec Retention"
            value={design.designInfo?.bioSpec?.retention}
          />
        </div>

        {design.designInfo?.interventionModelDescription && (
          <div className="space-y-2 text-left">
            <h3 className="font-semibold text-muted-foreground">
              Intervention Model Description
            </h3>

            <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
              {design.designInfo.interventionModelDescription}
            </pre>
          </div>
        )}

        {design.designInfo?.maskingInfo?.maskingDescription && (
          <div className="space-y-2 text-left">
            <h3 className="font-semibold text-muted-foreground">
              Masking Description
            </h3>

            <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
              {design.designInfo.maskingInfo?.maskingDescription}
            </pre>
          </div>
        )}

        {design.designInfo?.bioSpec?.description && (
          <div className="space-y-2 text-left">
            <h3 className="font-semibold text-muted-foreground">
              BioSpec Description
            </h3>

            <pre className="whitespace-pre-wrap font-sans text-sm leading-7">
              {design.designInfo.bioSpec?.description}
            </pre>
          </div>
        )}
      </div>
    </DetailCard>
  );
}
