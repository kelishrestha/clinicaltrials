import { StatusFilter } from "./filters/StatusFilter";
import { LocationFilter } from "./filters/LocationFilter";
import { MissingFieldFilter } from "./filters/MissingFieldFilter";
import { useStudySearchStore } from "@/stores/studySearch.store";

export function FilterControls() {
  const {
    search,
    setStatus,
    setLocation,
    setMissingField,
  } = useStudySearchStore();

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <StatusFilter
        value={search.status ?? []}
        onChange={setStatus}
      />

      <LocationFilter
        value={search.location || ''}
        onChange={setLocation}
      />

      <MissingFieldFilter
        value={search.missingField}
        onChange={setMissingField}
      />
    </div>
  );
}
