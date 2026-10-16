export interface StudyNavigationItem {
  id: string;
  label: string;
}

export const studyNavigation: StudyNavigationItem[] = [
  {
    id: "summary",
    label: "Summary",
  },
  {
    id: "identification",
    label: "Identification",
  },
  {
    id: "description",
    label: "Description",
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
    id: "conditions",
    label: "Conditions",
  },
  {
    id: "conditions-mesh",
    label: "Conditions Mesh Terms",
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
    id: "interventions",
    label: "Interventions",
  },
  {
    id: "interventions-mesh",
    label: "Interventions Mesh Terms",
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
    id: "oversight",
    label: "Oversight Information",
  },
  {
    id: "ipd-sharing",
    label: "IPD Sharing",
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
    id: "api-response",
    label: "API Response"
  }
];
