import { MessageSquareWarning } from "lucide-react";

interface EmptyStateProps {
  description?: string;
}

export function ErrorState({
  description = "ClinicalTrials.gov does not provide information for this section.",
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg py-10 text-center">
      <MessageSquareWarning className="mb-4 h-10 w-10 text-destructive" />

      <h3 className="text-xl font-semibold">Oops!!</h3>
      <span className="mt-2 italic text-xs text-muted-foreground">There's something wrong on our side!</span>

      <p className="py-5 max-w-md text-sm text-muted-foreground">Reason: {description}</p>
    </div>
  );
}
