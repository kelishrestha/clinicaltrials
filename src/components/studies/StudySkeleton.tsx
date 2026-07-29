import { Skeleton } from "@/components/ui/skeleton";

export function StudySkeleton() {
  return (
    <div className="space-y-3 rounded-lg border p-6">
      <Skeleton className="h-5 w-28" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-20" />
    </div>
  );
}
