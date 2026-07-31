import { MessageSquareWarning } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({
  title = "No data available",
  description = "ClinicalTrials.gov does not provide information for this section.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-10 text-center">
      <MessageSquareWarning className="mb-4 h-10 w-10 text-muted-foreground" />

      <h3 className="text-sm font-medium">{title}</h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
