import { Skeleton } from "@/components/ui/skeleton";

import { FilterSidebarSkeleton } from "./FilterSidebarSkeleton";
import { StudyGridSkeleton } from "./StudyGridSkeleton";
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
          <StudyGridSkeleton count={count} />
        </div>
      </div>
    </div>
  );
}
