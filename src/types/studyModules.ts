import { type Organization } from "./study";
import type {
  BioSpec,
  Contact,
  Document,
  EnrollmentInfo,
  Location,
  MaskingInfo,
  Outcome,
  Reference,
} from "./study";
import type {
  StudyDesignAllocation,
  StudyDesignInterventionModel,
  StudyDesignObservationalModel,
  StudyDesignPrimaryPurpose,
  StudyDesignTimePerspective,
  StudyPhase,
  StudyStatus,
  StudyType,
} from "./study.enums";

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

  acronym?: string;

  secondaryIdInfos?: SecondaryId[];
}

export interface StatusModule {
  overallStatus: StudyStatus;

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

export interface ReferencesModule {
  references?: Reference[];
}

export interface DocumentsModule {
  largeDocumentModule?: {
    documents?: Document[];
  };
}

export interface DesignModule {
  studyType?: StudyType;

  nPtrsToThisExpAccNctId?: number;

  expandedAccessTypes?: {
    individual?: boolean;
    intermediate?: boolean;
    treatment?: boolean;
  };

  patientRegistry?: boolean;

  targetDuration?: string;

  phases?: StudyPhase;

  numPhases?: number;

  designInfo?: {
    allocation?: StudyDesignAllocation;
    interventionModel?: StudyDesignInterventionModel;
    interventionModelDescription?: string;
    primaryPurpose?: StudyDesignPrimaryPurpose;
    observationalModel?: StudyDesignObservationalModel;
    timePerspective?: StudyDesignTimePerspective;
    maskingInfo?: MaskingInfo;
    bioSpec?: BioSpec;
    enrollmentInfo?: EnrollmentInfo;
  };
}

export interface OutcomesModule {
  primaryOutcomes?: Outcome[];
  secondaryOutcomes?: Outcome[];
  otherOutcomes?: Outcome[];
}

export interface SecondaryId {
  id?: string;
  type?: string;
  domain?: string;
  linkingId?: string;
}
