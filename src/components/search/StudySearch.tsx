import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { useStudySearchStore } from "@/stores/studySearch.store";

export function StudySearch() {
  const term = useStudySearchStore(
    (state) => state.search.term,
  );

  const setTerm = useStudySearchStore(
    (state) => state.setTerm,
  );

  const [value, setValue] = useState(term);

  useEffect(() => {
    setValue(term);
  }, [term]);

  function handleSearch() {
    if(value == undefined) return;
    const next = value.trim();

    if (next !== term) {
      setTerm(next);
    }
  }

  return (
    <div className="relative max-w-xl">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

      <Input
        className="pl-9"
        placeholder="Search by condition, disease, intervention..."
        value={value}
        onChange={(e) =>
          setValue(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
          }
        }}
        onBlur={handleSearch}
      />
    </div>
  );
}
