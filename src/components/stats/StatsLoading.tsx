import { Skeleton } from "@/components/ui/skeleton";

export function StatsLoading() {
  return (
    <div className="space-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="space-y-4"
        >
          <Skeleton className="h-6 w-48" />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, card) => (
              <Skeleton
                key={card}
                className="h-24 rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
