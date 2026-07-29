import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";

interface StudySearchProps {
  value: string;
  onChange(value: string): void;
}

export function StudySearch({
  value,
  onChange,
}: StudySearchProps) {

  const update = useDebouncedCallback(
    onChange,
    500
  );
  return (
    <div className="relative max-w-xl">
      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

      <Input
        className="pl-9"
        placeholder="Search by condition, disease, intervention..."
        value={value}
        onChange={(e) => update(e.target.value)}
      />
    </div>
  );
}
