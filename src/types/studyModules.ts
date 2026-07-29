import { type Organization } from "./study";
import type { Contact, Location } from "./study";

export interface IdentificationModule {
  nctId: string;

  orgStudyIdInfo?: {
    id: string;
  };

  organization?: {
    fullName: string;
    class: string;
  };

  briefTitle: string;

  officialTitle?: string;
}

export interface StatusModule {
  overallStatus: string;

  startDateStruct?: {
    date: string;
    type: string;
  };

  completionDateStruct?: {
    date: string;
    type: string;
  };

  primaryCompletionDateStruct?: {
    date: string;
    type: string;
  };

  studyFirstPostDateStruct?: {
    date: string;
  };

  lastUpdatePostDateStruct?: {
    date: string;
  };
}

export interface ConditionsModule {
  conditions: string[];

  keywords?: string[];
}

export interface DescriptionModule {
  briefSummary?: string;

  detailedDescription?: string;
}

export interface EligibilityModule {
  eligibilityCriteria?: string;

  healthyVolunteers?: boolean;

  sex?: string;

  minimumAge?: string;

  maximumAge?: string;

  stdAges?: string[];
}


export interface SponsorCollaboratorsModule {
  leadSponsor: Organization;

  collaborators?: Organization[];

  responsibleParty?: {
    type: string;
  };
}

export interface Intervention {
  type: string;

  name: string;

  description?: string;
}

export interface ArmGroup {
  label: string;

  type?: string;

  description?: string;

  interventionNames?: string[];
}

export interface ArmsInterventionsModule {
  armGroups?: ArmGroup[];

  interventions?: Intervention[];
}



export interface ContactsLocationsModule {
  centralContacts?: Contact[];

  locations?: Location[];
}
