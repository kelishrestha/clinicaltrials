import { Skeleton } from "@/components/ui/skeleton";

export function InfoRowSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-3 w-24" />

      <Skeleton className="h-5 w-40" />
    </div>
  );
}
