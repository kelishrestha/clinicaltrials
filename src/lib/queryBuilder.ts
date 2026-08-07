import type { StudyFieldSearchParams, StudySearchParams } from "./api/types";

/**
 * Builds the Essie expression sent as `query.term`.
 *
 * A selected `missingField` becomes `AREA[<piece>]MISSING`, which matches
 * studies where that field was never filled in. The free-text term is
 * parenthesised so its own OR/AND operators keep their precedence when the
 * two are combined.
 */
function buildTermExpression(
  search: StudySearchParams,
) {
  const term = search.term?.trim();

  const missing = search.missingField
    ? `AREA[${search.missingField}]MISSING`
    : "";

  if (term && missing) {
    return `(${term}) AND ${missing}`;
  }

  return term || missing;
}

export function buildStudyQuery(
  search: StudySearchParams,
) {
  const params = new URLSearchParams();

  const term = buildTermExpression(search);

  if (term) {
    params.set("query.term", term);
  }

  if (search.location) {
    params.set("query.locn", search.location);
  }

  if (search.status && search.status?.length > 0) {
    params.set(
      "filter.overallStatus",
      search.status.join("|"),
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
