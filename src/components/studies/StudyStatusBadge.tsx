import { Badge } from "@/components/ui/badge";

interface Props {
  status: string;
}

const statusVariant: Record<
string,
"default" | "secondary" | "destructive" | "outline" | "accent" | "warning"
> = {
  RECRUITING: "default",
  ACTIVE_NOT_RECRUITING: "warning",
  COMPLETED: "accent",
  TERMINATED: "destructive",
  WITHDRAWN: "destructive",
  ENROLLING_BY_INVITATION: "secondary",
  NOT_YET_RECRUITING: "warning",
  SUSPENDED: "destructive",
  AVAILABLE: "default",
  NO_LONGER_AVAILABLE: "destructive",
  TEMPORARILY_NOT_AVAILABLE: "destructive",
  APPROVED_FOR_MARKETING: "outline",
  WITHHELD: "destructive",
  UNKNOWN: "secondary",
};

export function StudyStatusBadge({
  status,
}: Props) {
  return (
    <Badge
      variant={statusVariant[status] ?? "secondary"}
    >
      {status.replaceAll("_", " ")}
    </Badge>
  );
}
