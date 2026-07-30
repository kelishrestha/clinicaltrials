import { Card } from "@/components/ui/card";
import { StatusFilter } from "./filters/StatusFilter";
import { LocationFilter } from "./filters/LocationFilter";
import { useStudySearchStore } from "@/stores/studySearch.store";

export function StudyFilters() {
  const {
  search,
  setStatus,
  setLocation,
} = useStudySearchStore();

  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-8">
        <Card className="p-5 space-y-6">
          <div className="border-b border-secondary pb-3">
            <h2 className="font-semibold text-accent!">
              Filters
            </h2>

            <p className="text-xs text-muted-foreground">
              Narrow your search results
            </p>
          </div>

          <StatusFilter
            value={search.status ?? []}
            onChange={setStatus}
          />

          <LocationFilter
            value={search.location || ''}
            onChange={setLocation}
/>
        </Card>
      </div>
    </aside>
  );
}
