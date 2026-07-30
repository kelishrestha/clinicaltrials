
import type { StudyStatField } from "@/types/study.schema";

export function groupFields(
  fields: StudyStatField[],
) {
  return fields.reduce<
    Record<
      string,
      StudyStatField[]
    >
  >((groups, field) => {
    if (!groups[field.module]) {
      groups[field.module] = [];
    }

    groups[field.module].push(
      field,
    );

    return groups;
  }, {});
}
