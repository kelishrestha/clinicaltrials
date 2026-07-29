export function formatBoolean(value?: boolean | null) {
  if (value === undefined || value === null) {
    return "—";
  }

  return value ? "Yes" : "No";
}
