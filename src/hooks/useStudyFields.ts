import { useMemo } from "react";

import { useStudyMetadata } from "./useStudyMetadata";

import { transformMetadataToFields } from "@/lib/metadata/transformMetadataToFields";

export function useStudyFields() {
  const metadata =
    useStudyMetadata();

  const fields = useMemo(() => {
    if (!metadata.data) {
      return [];
    }

    return transformMetadataToFields(
      metadata.data,
    );
  }, [metadata.data]);

  return {
    ...metadata,

    fields,
  };
}
