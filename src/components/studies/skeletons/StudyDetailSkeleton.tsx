import { Skeleton } from "@/components/ui/skeleton";
import { DetailCardSkeleton } from "@/components/common/skeletons/DetailCardSkeleton";
import { StudyHeaderSkeleton } from "./StudyHeaderSkeleton";

export function StudyDetailSkeleton() {
  return (
    <div className="mx-auto max-w-screen-2xl px-6">
      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden w-65 lg:block">
          <div className="sticky top-8 space-y-2">
            <Skeleton className="h-8 w-full" />

            {Array.from({ length: 10 }).map((_, index) => (
              <Skeleton key={index} className="h-7 w-full" />
            ))}
          </div>
        </aside>

        <main className="min-w-0 space-y-6">
          <StudyHeaderSkeleton />

          <Skeleton className="h-28 w-full rounded-xl" />

          <DetailCardSkeleton />
          <DetailCardSkeleton />
          <DetailCardSkeleton />
        </main>
      </div>
    </div>
  );
}
