import { Card } from "@/components/ui/card";
import { StatusFilter } from "./filters/StatusFilter";
import { LocationFilter } from "./filters/LocationFilter";
import type { StudySearchParams } from "@/lib/api/types";


interface Props {
  search: StudySearchParams;
  onChange: (updates: Partial<StudySearchParams>) => void;
}

export function StudyFilters({ search, onChange }: Props) {
  return (
    <aside className="hidden lg:block w-72 shrink-0">
      <div className="sticky top-8">
        <Card className="p-5 space-y-6">
          <div>
            <h2 className="font-semibold">
              Filters
            </h2>

            <p className="text-sm text-muted-foreground">
              Narrow your search results.
            </p>
          </div>

          <StatusFilter
            value={search.status || 'all'}
            onChange={(status) =>
              onChange({
                status: status,
                page: 1,
              })
            }
          />

          <LocationFilter
            value={search.location || ''}
            onChange={(location) =>
              onChange({
                location: location,
                page: 1,
              })
            }
/>
        </Card>
      </div>
    </aside>
  );
}
