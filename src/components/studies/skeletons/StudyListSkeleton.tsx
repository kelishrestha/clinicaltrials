import { Skeleton } from "@/components/ui/skeleton";

import { FilterSidebarSkeleton } from "./FilterSidebarSkeleton";
import { StudyCardSkeleton } from "./StudyCardSkeleton";
import { StudySearchSkeleton } from "./StudySearchSkeleton";

interface Props {
  count?: number;
}

export function StudyListPageSkeleton({
  count = 9,
}: Props) {
  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <Skeleton className="h-10 w-64" />

        <Skeleton className="h-5 w-80" />
      </header>

      <StudySearchSkeleton />

      <div className="flex gap-8">
        <FilterSidebarSkeleton />

        <div className="min-w-0 flex-1">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: count }).map((_, index) => (
              <StudyCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
