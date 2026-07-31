import { formatDate } from "@/lib/formatters/formatDate";
import { StudyStatusBadge } from "../StudyStatusBadge";
import { DetailCard } from "../../common/DetailCard";
import { type StatusModule } from "@/types/studyModules";
import { formatBoolean } from "@/lib/formatters/formatBoolean";
import { FlexRow } from "@/components/common/FlexRow";
import { InfoRow } from "@/components/common/InfoRow";
import { InfoHeading } from "@/components/common/InfoHeading";

interface Props {
  status: StatusModule;
}

export function StatusCard({ status }: Props) {
  return (
    <DetailCard id="status" title="Study Status">
      <dl className="grid gap-6 sm:grid-cols-2">
        <FlexRow label="Recruitment Overall Status" value={
            <StudyStatusBadge status={status.overallStatus} />
          }
        />

        <FlexRow label="Last Known Status" value={
            <StudyStatusBadge status={status.lastKnownStatus || ''} />
          }
        />

        <FlexRow label="Delayed Posting" value={formatBoolean(status.delayedPosting)}/>

        <FlexRow label="Why Stopped" value={status.whyStopped} />

        <FlexRow label="Status Verified Date" value={formatDate(status.statusVerifiedDate)}/>

        <FlexRow label="Start Date" value={
            <>
              {formatDate(status.startDateStruct?.date)}
              {status.startDateStruct?.type && (
                <span className="pl-1">({status.startDateStruct?.type})</span>
              )}
            </>
          }
        />

        <FlexRow label="Primary Completion Date" value={
            <>
              {formatDate(status.primaryCompletionDateStruct?.date)}
              {status.primaryCompletionDateStruct?.type && (
                <span className="pl-1">({status.primaryCompletionDateStruct?.type})</span>
              )}
            </>
          }
        />

        <FlexRow label="Completion Date" value={
            <>
              {formatDate(status.completionDateStruct?.date)}
              {status.completionDateStruct?.type && (
                <span className="pl-1">({status.completionDateStruct?.type})</span>
              )}
            </>
          }
        />

        <FlexRow label="First Submit Date" value={
            formatDate(status.studyFirstSubmitDate)
          }
        />

        <FlexRow label="First Submit QC Date" value={
            formatDate(status.studyFirstSubmitQcDate)
          }
        />

        <FlexRow label="Study First Post Date" value={
            <>
              {formatDate(status.studyFirstPostDateStruct?.date)}
              {status.studyFirstPostDateStruct?.type && (
                <span className="pl-1">({status.studyFirstPostDateStruct?.type})</span>
              )}
            </>
          }
        />

        <FlexRow label="Last Submit Date" value={
            formatDate(status.lastUpdateSubmitDate)
          }
        />

        <FlexRow label="Last Update Post Date" value={
          <>
            {formatDate(status.lastUpdatePostDateStruct?.date)}
            {status.lastUpdatePostDateStruct?.type && (
              <span className="pl-1">({status.lastUpdatePostDateStruct?.type})</span>
            )}
          </>
          }
        />

        <FlexRow label="Results Waived" value={
            formatBoolean(status.resultsWaived)
          }
        />

        <FlexRow label="Results First Submit Date" value={
            formatDate(status.resultsFirstSubmitDate)
          }
        />

        <FlexRow label="Results First Submit QC Date" value={
            formatDate(status.resultsFirstSubmitQcDate)
          }
        />

        <FlexRow label="Results First Post Date" value={
            <>
              {formatDate(status.resultsFirstPostDateStruct?.date)}
              {status.resultsFirstPostDateStruct?.type && (
                <span className="pl-1">({status.resultsFirstPostDateStruct?.type})</span>
              )}
            </>
          }
        />

        <FlexRow label="Certification/Extension First Submit Date" value={
            formatDate(status.dispFirstSubmitDate)
          }
        />

        <FlexRow label="Certification/Extension First Submit QC Date" value={
            formatDate(status.dispFirstSubmitQcDate)
          }
        />

        <FlexRow label="Certification/Extension First Post Date" value={
            <>
              {formatDate(status.dispFirstPostDateStruct?.date)}
              {status.dispFirstPostDateStruct?.type && (
                <span className="pl-1">({status.dispFirstPostDateStruct?.type})</span>
              )}
            </>
          }
        />
      </dl>
      <div>
        <InfoHeading title="Expanded Access Information" />
        <InfoRow label="Has Expanded Access" value={formatBoolean(status.expandedAccessInfo?.hasExpandedAccess)} />
        <InfoRow label="Expanded Access NCT ID" value={status.expandedAccessInfo?.nctId} />
        <InfoRow label="Expanded Access Status for NCT ID" value={status.expandedAccessInfo?.statusForNctId} />
      </div>
    </DetailCard>
  );
}
