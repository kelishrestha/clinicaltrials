import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { ChevronDown } from "lucide-react";


import { StatFieldItem } from "./StatFieldItem";
import type { StudyStatField } from "@/types/study.schema";



interface Props {
  title: string;

  fields: StudyStatField[];

  selected: string[];

  onToggle(
    value: string,
  ): void;
}

export function StatFieldGroup({
  title,
  fields,
  selected,
  onToggle,
}: Props) {
  return (
    <Collapsible
      defaultOpen
    >
      <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
        {title}

        <ChevronDown className="h-4 w-4" />
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-1">
        {fields.map((field) => (
          <StatFieldItem
            key={field.value}
            field={field}
            checked={selected.includes(
              field.value,
            )}
            onToggle={() =>
              onToggle(
                field.value,
              )
            }
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
