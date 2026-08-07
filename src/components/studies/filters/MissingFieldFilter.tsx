import { useMemo, useState } from "react";
import { Check, ChevronsUpDown, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useStudyFields } from "@/hooks/useStudyFields";
import { groupFields } from "@/lib/metadata/groupFields";

interface Props {
  /** Essie search-area name, e.g. "LocationContactEMail" */
  value?: string;
  onChange: (value?: string) => void;
}

export function MissingFieldFilter({
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { fields, isLoading } = useStudyFields();

  // Only fields with a piece name can be used inside AREA[...].
  const searchable = useMemo(
    () => fields.filter((field) => Boolean(field.piece)),
    [fields],
  );

  const selected = useMemo(
    () => searchable.find((field) => field.piece === value),
    [searchable, value],
  );

  const grouped = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = query
      ? searchable.filter(
          (field) =>
            field.label.toLowerCase().includes(query) ||
            field.piece!.toLowerCase().includes(query) ||
            field.module.toLowerCase().includes(query),
        )
      : searchable;

    return groupFields(filtered);
  }, [searchable, search]);

  function select(piece: string) {
    onChange(piece === value ? undefined : piece);
    setOpen(false);
  }

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium">Missing Field</span>

      <p className="text-xs text-muted-foreground pb-3">
        Show only studies where the selected field was never provided
      </p>

      <div className="flex items-center gap-1">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger
            disabled={isLoading}
            className="inline-flex min-w-0 flex-1 items-center justify-between rounded-md border border-secondary px-3 py-2 text-sm disabled:opacity-60"
          >
            <span className="truncate text-left">
              {isLoading
                ? "Loading fields..."
                : selected
                ? selected.label
                : "Any field"}
            </span>

            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
          </PopoverTrigger>

          <PopoverContent align="start" className="w-80 p-2">
            <Input
              placeholder="Search fields..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <ScrollArea className="mt-2 h-72">
              <div className="space-y-3 pr-2">
                {Object.entries(grouped).map(
                  ([module, moduleFields]) => (
                    <div key={module} className="space-y-1">
                      <p className="px-2 text-xs font-medium text-muted-foreground">
                        {module}
                      </p>

                      {moduleFields.map((field) => {
                        const checked = field.piece === value;

                        return (
                          <button
                            key={field.value}
                            type="button"
                            title={field.piece}
                            onClick={() => select(field.piece!)}
                            className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent"
                          >
                            <Check
                              className={`h-4 w-4 shrink-0 ${
                                checked ? "opacity-100" : "opacity-0"
                              }`}
                            />

                            <span className="flex-1 truncate">
                              {field.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  ),
                )}

                {Object.keys(grouped).length === 0 && (
                  <p className="px-2 py-4 text-sm text-muted-foreground">
                    No fields match "{search}"
                  </p>
                )}
              </div>
            </ScrollArea>
          </PopoverContent>
        </Popover>

        {selected && (
          <button
            type="button"
            aria-label="Clear missing field filter"
            onClick={() => onChange(undefined)}
            className="rounded-md border border-secondary p-2 text-muted-foreground hover:bg-accent"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
