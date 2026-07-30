import type { StudyContactOfficialRole, StudyDesignAllocation, StudyDesignBioSpecRetention, StudyDesignEnrollmentType, StudyDesignInterventionModel, StudyDesignMasking, StudyDesignObservationalModel, StudyDesignPrimaryPurpose, StudyDesignTimePerspective, StudyDesignWhoMasked, StudyPhase, StudyStatus, StudyType } from "./study.types";

export const STUDY_MAP = {
  status: ["RECRUITING", "NOT_YET_RECRUITING", "ACTIVE_NOT_RECRUITING", "COMPLETED", "SUSPENDED", "TERMINATED", "WITHDRAWN", "UNKNOWN"] as StudyStatus[],
  type: ["EXPANDED_ACCESS", "INTERVENTIONAL", "OBSERVATIONAL"] as StudyType[],
  phase: ["NA", "EARLY_PHASE1", "PHASE1", "PHASE2", "PHASE3", "PHASE4"] as StudyPhase[],
  allocation: ["RANDOMIZED", "NON_RANDOMIZED", "NA"] as StudyDesignAllocation[],
  interventionModel: ["SINGLE_GROUP", "PARALLEL" , "CROSSOVER" , "FACTORIAL" , "SEQUENTIAL"] as StudyDesignInterventionModel[],
  primaryPurpose: ["TREATMENT", "PREVENTION", "DIAGNOSTIC", "ECT", "SUPPORTIVE_CARE", "SCREENING", "HEALTH_SERVICES_RESEARCH", "BASIC_SCIENCE", "DEVICE_FEASIBILITY", "OTHER"] as StudyDesignPrimaryPurpose[],
  observationalModel: ["COHORT", "CASE_CONTROL", "CASE_ONLY", "CASE_CROSSOVER", "ECOLOGIC_OR_COMMUNITY", "FAMILY_BASED", "DEFINED_POPULATION", "NATURAL_HISTORY", "OTHER"] as StudyDesignObservationalModel[],
  timePerspective: ["RETROSPECTIVE", "PROSPECTIVE", "CROSS_SECTIONAL", "OTHER"] as StudyDesignTimePerspective[],
  enrollmentType: ["ACTUAL", "ESTIMATED"] as StudyDesignEnrollmentType[],
  masking: ["NONE", "SINGLE", "DOUBLE", "TRIPLE", "QUADRUPLE"] as StudyDesignMasking[],
  whoMasked: ["PARTICIPANT", "CARE_PROVIDER", "INVESTIGATOR", "OUTCOMES_ASSESSOR"] as StudyDesignWhoMasked[],
  bioSpecRetention: ["NONE_RETAINED", "SAMPLES_WITH_DNA", "SAMPLES_WITHOUT_DNA"] as StudyDesignBioSpecRetention[],
  officialRole: ["STUDY_CHAIR", "STUDY_DIRECTOR", "PRINCIPAL_INVESTIGATOR", "SUB_INVESTIGATOR"] as StudyContactOfficialRole[],
} as const;


export type studyMapKeys =
 | "status"
 | "type"
 | "phase"
 | "allocation"
 | "interventionModel"
 | "primaryPurpose"
 | "observationalModel"
 | "timePerspective"
 | "enrollmentType"
 | "masking"
 | "whoMasked"
 | "bioSpecRetention"
 | "officialRole";
