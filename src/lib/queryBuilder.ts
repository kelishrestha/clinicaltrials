import type { StudyFieldSearchParams, StudySearchParams } from "./api/types";

export function buildStudyQuery(
  search: StudySearchParams,
) {
  const params = new URLSearchParams();

  if (search.term) {
    params.set("query.cond", search.term);
  }

  if (search.location) {
    params.set("query.locn", search.location);
  }

  if (search.status && search.status?.length > 0) {
    params.set(
      "filter.overallStatus",
      Array(search.status).join("|"),
    );
  }


  if (search.pageToken) {
    params.set("pageToken", search.pageToken);
  }

  params.set( "pageSize", String(search.pageSize));

  params.set("countTotal", "true");

  return params;
}


export function buildStudyStatsQuery(
  search: StudyFieldSearchParams,
) {
  const params = new URLSearchParams();

  if (search.types && search.types.length) {
    params.set(
      "types",
      search.types.join("|"),
    );
  }

  if (search.fields && search.fields.length) {
    params.set(
      "fields",
      search.fields.join("|"),
    );
  }

  return params;
}
