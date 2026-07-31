import type {
  ConditionBrowseLeafRelevance,
  ReferenceType,
  StudyDesignBioSpecRetention,
  StudyDesignEnrollmentType,
  StudyDesignMasking,
  StudyDesignWhoMasked,
} from "./study.types";
import { type DerivedSection, type DocumentSection, type ProtocolSection } from "./studySections";
export interface Study {
  protocolSection: ProtocolSection;
  documentSection: DocumentSection;
  derivedSection: DerivedSection;
}

export interface Organization {
  fullName: string;
  class?: string;
}

export interface Sponsor {
  name: string;
  class?: string;
}

export interface Contact {
  name?: string;
  role?: string;
  phone?: string;
  phoneExt?: string;
  email?: string;
}

export interface Location {
  facility: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  status?: string;
  contacts?: Contact[];
  numLocationContacts?: number;
  countryCode?: number;
  geoPoint?: {
    lat?: string;
    lon?: string;
  };
}

export interface Reference {
  pmid?: string;
  type?: ReferenceType
  citation?: string;
  retractions?: {
    pmid?: string;
    source?: string;
  }[];
}
export interface EnrollmentInfo {
  count?: number;
  type?: StudyDesignEnrollmentType;
}

export interface MaskingInfo {
  masking?: StudyDesignMasking;
  maskingDescription?: string;
  whoMasked?: StudyDesignWhoMasked;
  numDesignWhoMaskeds?: number;
}

export interface BioSpec {
  retention?: StudyDesignBioSpecRetention;
  description?: string;
}

export interface Outcome {
  measure?: string;
  description?: string;
  timeFrame?: string;
}

export interface SecondaryId {
  id?: string;
  type?: string;
  domain?: string;
  link?: string;
}

export interface Intervention {
  type?: string;
  name?: string;
  description?: string;
  armGroupLabels?: string[];
  otherNames?: string[];
}

export interface ArmGroup {
  label: string;
  type?: string;
  description?: string;
  interventionNames?: string[];
}

export interface MeshTerm {
  id?: string;
  term?: string;
}

export interface BrowseLeaf {
  id?: string;
  name?: string;
  asFound?: string;
  relevance?: ConditionBrowseLeafRelevance;
}

export interface BrowseBranches {
  abbrev?: string;
  name?: string;
}
