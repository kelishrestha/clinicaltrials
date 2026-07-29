import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Props {
  status: string;
}

const variants: Record<string, string> = {
  RECRUITING: "bg-green-600",
  COMPLETED: "bg-slate-600",
  ACTIVE_NOT_RECRUITING: "bg-blue-600",
  TERMINATED: "bg-red-600",
  WITHDRAWN: "bg-red-700",
  ENROLLING_BY_INVITATION: "bg-blue-500",
  NOT_YET_RECRUITING: "bg-yellow-600",
  SUSPENDED: "bg-yellow-800",
  AVAILABLE: "bg-green-700",
  NO_LONGER_AVAILABLE: "bg-red-600",
  TEMPORARILY_NOT_AVAILABLE: "bg-red-600",
  APPROVED_FOR_MARKETING: "bg-yellow-700",
  WITHHELD: "bg-red-600",
  UNKNOWN: "bg-gray-600",
};

export function StudyStatusBadge({
  status,
}: Props) {
  return (
    <Badge className={cn("py-1 px-2 rounded-sm text-white", variants[status] ?? "")}>
      {status.replaceAll("_", " ")}
    </Badge>
  );
}
