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
}
