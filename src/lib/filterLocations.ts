interface LocationFilterFields {
  city?: string;
  state?: string;
  zip?: string;
}

/**
 * Matches a location against a free-text query over its city, state and zip.
 * An empty query matches everything.
 */
export function matchesLocation(location: LocationFilterFields, query: string) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return true;
  }

  return [location.city, location.state, location.zip]
    .filter((value): value is string => Boolean(value))
    .some((value) => value.toLowerCase().includes(normalized));
}
