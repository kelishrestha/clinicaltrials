export interface StudyNavigationItem {
  id: string;
  label: string;
}

export const studyNavigation: StudyNavigationItem[] = [
  {
    id: "identification",
    label: "Identification",
  },
  {
    id: "status",
    label: "Status",
  },
  {
    id: "sponsor",
    label: "Sponsors",
  },
  {
    id: "design",
    label: "Design",
  },
  {
    id: "description",
    label: "Description",
  },
  {
    id: "conditions",
    label: "Conditions",
  },
  {
    id: "eligibility",
    label: "Eligibility",
  },
  {
    id: "arms",
    label: "Arms",
  },
  {
    id: "outcomes",
    label: "Outcome Measures",
  },
  {
    id: "central-contacts",
    label: "Central Contacts",
  },
  {
    id: "official-contacts",
    label: "Official Contacts",
  },
  {
    id: "locations",
    label: "Locations",
  },
  {
    id: "references",
    label: "References",
  },
  {
    id: "documents",
    label: "Documents",
  },
  {
    id: "results",
    label: "Results",
  },
  {
    id: "raw-response",
    label: "API Response"
  }
];
