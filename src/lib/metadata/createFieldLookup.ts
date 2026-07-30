import type { StudyStatField } from "@/types/study.schema";

export function createFieldLookup(
  fields: StudyStatField[],
) {
  return fields.reduce<
    Record<string, StudyStatField>
  >((lookup, field) => {
    lookup[field.value] = field;
    return lookup;
  }, {});
}
