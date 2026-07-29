import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export function useStudySearch() {
  const [params, setParams] = useSearchParams();

  const query = params.get("query") ?? "";

  const pageToken = params.get("pageToken") ?? undefined;

  const pageSize = Number(
    params.get("pageSize") ?? "20"
  );

  const search = useMemo(
    () => ({
      query,
      pageToken,
      pageSize,
    }),
    [query, pageToken, pageSize]
  );

  function update(
    values: Partial<typeof search>
  ) {
    const next = new URLSearchParams(params);

    Object.entries(values).forEach(([key, value]) => {
      if (!value) {
        next.delete(key);
      } else {
        next.set(key, String(value));
      }
    });

    setParams(next);
  }

  return {
    search,

    setQuery(query: string) {
      update({
        query,
        pageToken: undefined,
      });
    },

    setPageToken(pageToken?: string) {
      update({ pageToken });
    },
  };
}
