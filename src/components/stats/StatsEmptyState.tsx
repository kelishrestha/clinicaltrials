import { BarChart3 } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
}

export function StatsEmptyState({
  title = "Select metadata fields",
  description = "Choose one or more metadata fields to explore statistics.",
}: Props) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed text-center">
      <BarChart3 className="mb-4 h-12 w-12 text-muted-foreground" />

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
