import { Skeleton } from "@/components/ui/skeleton";

export function StudyHeaderSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-32 rounded-full" />

      <Skeleton className="h-10 w-3/4" />

      <Skeleton className="h-5 w-1/2" />

      <div className="flex flex-wrap gap-3">
        <Skeleton className="h-8 w-28" />
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-36" />
      </div>
    </div>
  );
}
