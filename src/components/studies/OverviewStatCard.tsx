import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  label: string;
  value?: number;
  loading?: boolean;
}

export function OverviewStatCard({
  label,
  value,
  loading,
}: Props) {
  return (
    <Card className="space-y-2 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </p>

      {loading ? (
        <Skeleton className="h-9 w-24" />
      ) : (
        <p className="text-3xl font-bold text-primary!">
          {(value ?? 0).toLocaleString()}
        </p>
      )}
    </Card>
  );
}
