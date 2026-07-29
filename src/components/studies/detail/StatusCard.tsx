import { formatDate } from "@/utils/formatDate";
import { StudyStatusBadge } from "../StudyStatusBadge";
import { DetailCard } from "./DetailCard";
import { type StatusModule } from "@/types/studyModules";

interface Props {
  status: StatusModule;
}

export function StatusCard({
  status,
}: Props) {
  return (
    <DetailCard title="Study Status">
      <dl className="grid gap-6 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted-foreground">
            Recruitment Status
          </dt>

          <dd className="mt-1 font-medium">
            <StudyStatusBadge
              status={
                status.overallStatus
              }
            />
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Start Date
          </dt>

          <dd className="mt-1">
            {formatDate(status.startDateStruct?.date)}
            { status.startDateStruct?.type && (
              <span className="pl-1">({status.startDateStruct?.type})</span>
            )}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Primary Completion
          </dt>

          <dd className="mt-1">
            {formatDate(
              status.primaryCompletionDateStruct?.date
            )}
            { status.primaryCompletionDateStruct?.type && (
              <span className="pl-1">({status.primaryCompletionDateStruct?.type})</span>
            )}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Study Completion
          </dt>

          <dd className="mt-1">
            {formatDate(
              status.completionDateStruct?.date
            )}
            { status.completionDateStruct?.type && (
              <span className="pl-1">({status.completionDateStruct?.type})</span>
            )}
          </dd>
        </div>

        <div>
          <dt className="text-sm text-muted-foreground">
            Last Updated
          </dt>

          <dd className="mt-1">
            {formatDate(
              status.lastUpdatePostDateStruct?.date
            )}
          </dd>
        </div>
      </dl>
    </DetailCard>
  );
}
