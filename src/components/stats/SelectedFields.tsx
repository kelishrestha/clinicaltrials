import { X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { useStudyStatsStore } from "@/stores/studyStats.store";
import { useStudyFieldLookup } from "@/hooks/useStudyFieldLookup";

export function SelectedFields() {
  const fields = useStudyStatsStore(
    (state) => state.search.fields,
  );
  const { lookup } = useStudyFieldLookup();

  const setFields = useStudyStatsStore(
    (state) => state.setFields,
  );

  if (fields && fields.length === 0) {
    return (
      <div className="space-y-2">
        <h3 className="font-medium">
          Selected Fields
        </h3>

        <p className="text-sm text-muted-foreground">
          No fields selected.
        </p>
      </div>
    );
  }

  function removeField(field: string) {
    if(fields){
      setFields(
        fields.filter(
          (item) => item !== field,
        ),
      );
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">
          Selected Fields
        </h3>

        <Badge variant="secondary">
          {fields?.length}
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        {fields?.map((field) => {
          const label = lookup[field]?.label;

          return (
            <Badge
              key={field}
              variant="outline"
              className="gap-1"
            >
              <span className=" truncate">
                {label}
              </span>

              <button
                type="button"
                onClick={() =>
                  removeField(field)
                }
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          );
        })}
      </div>

      <Button
        variant="ghost"
        size="sm"
        className="w-full"
        onClick={() => setFields([])}
      >
        Clear All
      </Button>
    </div>
  );
}
