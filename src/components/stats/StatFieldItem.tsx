import { Checkbox } from "@/components/ui/checkbox";
import type { StudyStatField } from "@/types/study.schema";

interface Props {
  field: StudyStatField;

  checked: boolean;

  onToggle(): void;
}

export function StatFieldItem({
  field,
  checked,
  onToggle,
}: Props) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-md px-2 py-2 hover:bg-accent">
      <Checkbox
        checked={checked}
        onCheckedChange={
          onToggle
        }
      />

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">
          {field.label}
        </p>

        <p className="truncate text-xs text-muted-foreground">
          {field.value}
        </p>
      </div>
    </label>
  );
}
