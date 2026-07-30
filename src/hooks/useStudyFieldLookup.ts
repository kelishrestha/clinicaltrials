import { useMemo } from "react";

import { useStudyFields } from "./useStudyFields";

import { createFieldLookup } from "@/lib/metadata/createFieldLookup";

export function useStudyFieldLookup() {
  const { fields, ...query } =
    useStudyFields();

  const lookup = useMemo(
    () => createFieldLookup(fields),
    [fields],
  );

  return {
    ...query,
    lookup,
  };
}
