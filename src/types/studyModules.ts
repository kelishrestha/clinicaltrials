import type {
  ArmGroup,
  BioSpec,
  BrowseBranches,
  BrowseLeaf,
  Contact,
  EnrollmentInfo,
  Intervention,
  Location,
  MaskingInfo,
  MeshTerm,
  Outcome,
  Reference,
  SecondaryId,
  Sponsor,
} from "./study";
import type {
  IPDSharingInfoType,
  StudyDesignAllocation,
  StudyDesignInterventionModel,
  StudyDesignObservationalModel,
  StudyDesignPrimaryPurpose,
  StudyDesignTimePerspective,
  StudyExpandedAccessStatus,
  StudyPhase,
  StudySamplingMethod,
  StudyStatus,
  StudyType,
} from "./study.types";

export interface IdentificationModule {
  nctId: string;
  nctIdAliases: string;
  orgStudyIdInfo?: {
    id: string;
    type: string;
    link: string;
  };
  secondaryIdInfos?: SecondaryId[];
  briefTitle: string;
  officialTitle?: string;
  acronym?: string;
  organization?: {
    fullName: string;
    class: string;
  };
}

export interface StatusModule {
  statusVerifiedDate?: string;
  overallStatus: StudyStatus;
  lastKnownStatus?: StudyStatus;
  delayedPosting?: boolean;
  whyStopped?: string;
  expandedAccessInfo?: {
    hasExpandedAccess?: boolean;
    nctId?: string;
    statusForNctId?: StudyExpandedAccessStatus;
  }
  startDateStruct?: {
    date?: string;
    type?: string;
  };
  primaryCompletionDateStruct?: {
    date?: string;
    type?: string;
  };
  completionDateStruct?: {
    date?: string;
    type?: string;
  };
  studyFirstSubmitDate?: string;
  studyFirstSubmitQcDate?: string;
  studyFirstPostDateStruct?: {
    date: string;
    type: string;
  };
  resultsWaived?: boolean;
  resultsFirstSubmitDate?: string;
  resultsFirstSubmitQcDate?: string;
  resultsFirstPostDateStruct?: {
    date?: string;
    type?: string;
  }
  dispFirstSubmitDate?: string;
  dispFirstSubmitQcDate?: string;
  dispFirstPostDateStruct?: {
    date?: string;
    type?: string;
  }
  lastUpdateSubmitDate?: string;
  lastUpdatePostDateStruct?: {
    date: string;
    type: string;
  };
}

export interface SponsorCollaboratorsModule {
  leadSponsor: Sponsor;
  collaborators?: Sponsor[];
  responsibleParty?: {
    type?: string;
    investigatorFullName?: string;
    investigatorTitle?: string;
    investigatorAffiliation?: string;
    oldNameTitle?: string;
    oldOrganization?: string;
  };
}

export interface OversightModule {
  oversightHasDmc?: boolean;
  isFdaRegulatedDrug?: boolean;
  isFdaRegulatedDevice?: boolean;
  isUnapprovedDevice?: boolean;
  isPpsd?: boolean;
  isUsExport?: boolean;
  fdaaa801Violation?: boolean;
}

export interface DescriptionModule {
  briefSummary?: string;
  detailedDescription?: string;
}

export interface ConditionsModule {
  conditions?: string[];
  keywords?: string[];
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
  };
  enrollmentInfo?: EnrollmentInfo;
}

export interface ArmsInterventionsModule {
  armGroups?: ArmGroup[];
  interventions?: Intervention[];
}

export interface OutcomesModule {
  primaryOutcomes?: Outcome[];
  secondaryOutcomes?: Outcome[];
  otherOutcomes?: Outcome[];
}

export interface EligibilityModule {
  eligibilityCriteria?: string;
  healthyVolunteers?: boolean;
  sex?: string;
  genderBased?: boolean;
  genderDescription?: string;
  minimumAge?: string;
  maximumAge?: string;
  stdAges?: string[];
  studyPopulation?: string;
  samplingMethod?: StudySamplingMethod;
}

export interface ContactsLocationsModule {
  centralContacts?: Contact[];
  numCentralContacts?: number;
  overallOfficials?: {
    name?: string;
    affiliation?: string;
    role?: string;
  }[];
  numOverallOfficials?: number;
  locations?: Location[];
  numLocations?: number;
  numUniqueLocationCountries?: number;
}

export interface ReferencesModule {
  references?: Reference[];
  seeAlsoLinks?: {
    label?: string;
    url?: string;
  }[];
  availIpds?: {
    id?: string;
    type?: string;
    url?: string;
    comment?: string;
  }
}

export interface IPDSharingStatementModule {
  ipdSharing?: string;
  description?: string;
  infoTypes?: IPDSharingInfoType[];
  timeFrame?: string;
  accessCriteria?: string;
  url?: string;
}

export interface DocumentsModule {
  noSap?: boolean;
  largeDocs?: {
    typeAbbrev?: string;
    hasProtocol?: boolean;
    hasSap?: boolean;
    hasIcf?: boolean;
    label?: string;
    date?: string;
    uploadDate?: string;
    filename?: string;
    size?: string;
  }[];
}

export interface BrowseLeafModule {
  meshes?: MeshTerm[];
  ancestors?: MeshTerm[];
  browseLeaves?: BrowseLeaf[];
  browseBranches?: BrowseBranches[];
}

export interface MiscInfoModule {
    versionHolder?: string;
    removedCountries?: string[];
    submissionTracking?: {
      estimatedResultsFirstSubmitDate?: string;
      firstMcpInfo?: {
        postDateStruct?: {
          date?: string;
          type?: string;
        }
      }
      submissionInfos?: {
        releaseDate?: string;
        unreleaseDate?: string;
        unreleaseDateUnknown?: boolean;
        resetDate?: string;
        mcpReleaseN?: number;
      }[];
    }
  }
