import type { StatTypes } from "@/lib/api/types";

export interface StudyStatType {
  value: StatTypes;
  label: string;
  description: string;
}

export const STUDY_STAT_TYPES: StudyStatType[] = [
  {
    value: "STRING",
    label: "String",
    description: "Text values",
  },
  {
    value: "ENUM",
    label: "Enum",
    description: "Enumerated values",
  },
  {
    value: "NUMBER",
    label: "Number",
    description: "Decimal numbers",
  },
  {
    value: "INTEGER",
    label: "Integer",
    description: "Whole numbers",
  },
  {
    value: "BOOLEAN",
    label: "Boolean",
    description: "True / False",
  },
  {
    value: "DATE",
    label: "Date",
    description: "Date values",
  },
];
