const ROLE_LABELS: Record<string, string> = {
  STUDY_CHAIR: "Study Chair",
  STUDY_DIRECTOR: "Study Director",
  PRINCIPAL_INVESTIGATOR: "Principal Investigator",
  SUB_INVESTIGATOR: "Sub-Investigator",
  CONTACT: "Contact",
};

export function roleLabel(role?: string) {
  if (!role) {
    return "-";
  }

  return ROLE_LABELS[role] ?? role.replaceAll("_", " ");
}
