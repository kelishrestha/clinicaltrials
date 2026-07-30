import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

interface StudySearchProps {
  value: string;
  onChange(value: string): void;
}

export function StudySearch({
  value,
  onChange,
}: StudySearchProps) {
  const [term, setTerm] = useState(value);

  useEffect(() => {
    setTerm(value);
  }, [value]);

  function handleSearch() {
    if (term.trim() !== value) {
      onChange(term.trim());
    }
  }

  return (
    <div className="relative max-w-xl">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

      <Input
        className="pl-9"
        placeholder="Search by condition, disease, intervention..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
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
