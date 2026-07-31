import { DetailCard } from "@/components/common/DetailCard";
import { InfoRow } from "@/components/common/InfoRow";
import { formatBoolean } from "@/lib/formatters/formatBoolean";
import type { OversightModule } from "@/types/studyModules";

interface OverSightCardProps {
  data: OversightModule;
}
export function OversightCard({ data }: OverSightCardProps) {
  return (
    <DetailCard id="oversight" title="Oversight Information">
      <div>
        <InfoRow label="Has DMC" value={formatBoolean(data.oversightHasDmc)} />
        <InfoRow label="FDA Regulated Drug" value={formatBoolean(data.isFdaRegulatedDrug)} />
        <InfoRow label="FDA Regulated Device" value={formatBoolean(data.isFdaRegulatedDevice)} />
        <InfoRow label="Unapproved Device" value={formatBoolean(data.isUnapprovedDevice)} />
        <InfoRow label="PPSD" value={formatBoolean(data.isPpsd)} />
        <InfoRow label="US Export" value={formatBoolean(data.isUsExport)} />
        <InfoRow label="FDA AA801 Violation" value={formatBoolean(data.fdaaa801Violation)} />
      </div>
    </DetailCard>
  )
}
