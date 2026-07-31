import { DetailCard } from "@/components/common/DetailCard";
import { InfoRow } from "@/components/common/InfoRow";
import type { IPDSharingStatementModule } from "@/types/studyModules";

interface IpdSharingCardProps {
  data: IPDSharingStatementModule;
}
export function IpdSharingCard({ data }: IpdSharingCardProps) {
  return (
    <DetailCard id="ipd-sharing" title="IPD Sharing Information">
      <div>
        <InfoRow label="IPD Sharing" value={data.ipdSharing} />
        <InfoRow label="Time frame" value={data.timeFrame} />
        <InfoRow label="Info Types" value={data.infoTypes} />
        <InfoRow label="Access Criteria" value={data.accessCriteria} />
        <InfoRow label="Description" value={data.description} />
        <InfoRow label="URL" value={data.url} />
      </div>
    </DetailCard>
  )
}
