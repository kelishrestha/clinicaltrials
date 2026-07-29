export type StudyStatus =
  | "RECRUITING"
  | "NOT_YET_RECRUITING"
  | "ACTIVE_NOT_RECRUITING"
  | "COMPLETED"
  | "SUSPENDED"
  | "TERMINATED"
  | "WITHDRAWN"
  | "UNKNOWN";

export type StudyType =
  | "EXPANDED_ACCESS"
  | "INTERVENTIONAL"
  | "OBSERVATIONAL";

export type StudyPhase =
  | "NA"
  | "EARLY_PHASE1"
  | "PHASE1"
  | "PHASE2"
  | "PHASE3"
  | "PHASE4";


export type StudyDesignAllocation =
  | "RANDOMIZED"
  | "NON_RANDOMIZED"
  | "NA";

export type StudyDesignInterventionModel =
  | "SINGLE_GROUP"
  | "PARALLEL"
  | "CROSSOVER"
  | "FACTORIAL"
  | "SEQUENTIAL";

export type StudyDesignPrimaryPurpose =
  | "TREATMENT"
  | "PREVENTION"
  | "DIAGNOSTIC"
  | "ECT"
  | "SUPPORTIVE_CARE"
  | "SCREENING"
  | "HEALTH_SERVICES_RESEARCH"
  | "BASIC_SCIENCE"
  | "DEVICE_FEASIBILITY"
  | "OTHER";

export type StudyDesignObservationalModel =
  | "COHORT"
  | "CASE_CONTROL"
  | "CASE_ONLY"
  | "CASE_CROSSOVER"
  | "ECOLOGIC_OR_COMMUNITY"
  | "FAMILY_BASED"
  | "DEFINED_POPULATION"
  | "NATURAL_HISTORY"
  | "OTHER";

export type StudyDesignTimePerspective =
  | "RETROSPECTIVE"
  | "PROSPECTIVE"
  | "CROSS_SECTIONAL"
  | "OTHER";

export type StudyDesignEnrollmentType =
  | "ACTUAL"
  | "ESTIMATED";

export type StudyDesignMasking =
  | "NONE"
  | "SINGLE"
  | "DOUBLE"
  | "TRIPLE"
  | "QUADRUPLE";

export type StudyDesignWhoMasked =
  | "PARTICIPANT"
  | "CARE_PROVIDER"
  | "INVESTIGATOR"
  | "OUTCOMES_ASSESSOR"

export type StudyDesignBioSpecRetention =
  | "NONE_RETAINED"
  | "SAMPLES_WITH_DNA"
  | "SAMPLES_WITHOUT_DNA"
