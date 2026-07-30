import { ChevronsUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { STUDY_MAP } from "@/types/study.definitions";
import type { StudyStatus } from "@/types/study.types";
import { formatStudyEnum } from "@/lib/formatters/studyFormatters";

interface Props {
  value: StudyStatus[];
  onChange: (value: StudyStatus[]) => void;
}

export function StatusFilter({ value, onChange }: Props) {
  const allSelected = value.length === STUDY_MAP.status.length;
  const isIndeterminate = value.length > 0 && value.length < STUDY_MAP.status.length;

  function toggleAll() {
    if (allSelected) {
      onChange([]);
    } else {
      onChange([...STUDY_MAP.status]);
    }
  }

  function toggle(status: StudyStatus) {
    if (value.includes(status)) {
      onChange(value.filter((s) => s !== status));
    } else {
      onChange([...value, status]);
    }
  }

  const label =
    value.length === 0
      ? "No statuses selected"
      : value.length === STUDY_MAP.status.length
      ? "All statuses"
      : value.length === 1
      ? formatStudyEnum(value[0])
      : `${value.length} statuses`;

  return (
    <div className="space-y-2">
      <span className="text-sm font-medium">Recruitment Status</span>

      <Popover>
        <PopoverTrigger className="inline-flex w-full items-center justify-between rounded-md border border-secondary px-3 py-2 text-sm">
          <span>{label}</span>
          <ChevronsUpDown className="h-4 w-4 opacity-60" />
        </PopoverTrigger>

        <PopoverContent align="start" className="w-80 p-2">
          <div className="space-y-1">
            {/* Top "All Statuses" Container Row */}
            <div
              className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 hover:bg-accent"
              onClick={toggleAll}
            >
              <Checkbox
                checked={allSelected}
                onCheckedChange={toggleAll}
                // Ref Workaround: Find the nested input element and inject the indeterminate state
                ref={(el) => {
                  if (!el) return;
                  // Look for Radix's hidden native input or button primitive inside the DOM element
                  const input = el.querySelector("input") || el.closest("button")?.querySelector("input");
                  if (input) {
                    input.indeterminate = isIndeterminate;
                  }
                }}
              />
              <span className="flex-1 text-sm font-medium">All statuses</span>
            </div>

            <div className="my-2 border-t" />

            {/* Individual Grid Rows */}
            {STUDY_MAP.status.map((status) => {
              const checked = value.includes(status);

              return (
                <div
                  key={status}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 hover:bg-accent"
                  onClick={(e) => {
                    // Prevent double-triggering if the checkbox itself was clicked
                    if ((e.target as HTMLElement).closest("button")?.getAttribute("role") === "checkbox") return;
                    toggle(status);
                  }}
                >
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => toggle(status)}
                  />

                  <span className="flex-1 text-left text-sm">
                    {formatStudyEnum(status)}
                  </span>
                </div>
              );
            })}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
