import type {
  StudyDesignBioSpecRetention,
  StudyDesignEnrollmentType,
  StudyDesignMasking,
  StudyDesignWhoMasked,
} from "./study.types";
import { type ProtocolSection } from "./studySections";
export interface Study {
  protocolSection: ProtocolSection;
}

export interface Organization {
  fullName: string;
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
  geoPoint?: any;
}

export interface Reference {
  pmid?: string;
  citation: string;
}

export interface Document {
  url: string;
  label: string;
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
