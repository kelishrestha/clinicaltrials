import { Skeleton } from "@/components/ui/skeleton";

export function FilterSidebarSkeleton() {
  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      <div className="rounded-lg border border-secondary bg-card p-6">
        <Skeleton className="mb-6 h-6 w-24" />

        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <Skeleton className="h-4 w-20" />

              <Skeleton className="h-9 w-full" />

              <Skeleton className="h-9 w-full" />

              <Skeleton className="h-9 w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
