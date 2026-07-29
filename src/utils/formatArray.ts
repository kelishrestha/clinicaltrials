export function formatArray(values?: string[]) {
  if (!values?.length) {
    return "—";
  }

  return values.join(", ");
}
