import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { StatValueCard } from "./StatValueCard";

import { useStudyFieldLookup } from "@/hooks/useStudyFieldLookup";
import type { StudyFieldValues } from "@/types/studyStats";


interface Props {
  field: StudyFieldValues;
}

export function StatValueGroup({
  field,
}: Props) {
  const { lookup } = useStudyFieldLookup();

  const metadata = lookup[field.field];

  const title =
    metadata?.label ?? field.field;

  return (
    <Card className="space-y-5 p-5">
      <div className="space-y-3">
        <div>
          <h2 className="text-xl font-semibold text-primary!">
            {title}
          </h2>

          {metadata?.description && (
            <p className="mt-1 text-sm text-muted-foreground">
              {metadata.description}
            </p>
          )}
          <Badge variant="secondary">
            {field.type}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>
            {field.uniqueValuesCount.toLocaleString()} unique
          </Badge>

          <Badge variant="outline">
            {field.missingStudiesCount.toLocaleString()} missing
          </Badge>
        </div>
      </div>

      {field.topValues.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {field.topValues.map((value) => (
            <StatValueCard
              key={value.value}
              value={value}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
          No values returned for this field.
        </div>
      )}
    </Card>
  );
}
