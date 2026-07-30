import type { StudySearchParams } from "./api/types";


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
